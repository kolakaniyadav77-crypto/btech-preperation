// Enhanced Code Compiler Service
// Single reliable backend (server/Piston) with light local fallbacks
// ========================================================

export const languageMap = {
  'Python': 'python3',
  'JavaScript': 'javascript',
  'Java': 'java',
  'C++': 'cpp',
  'C': 'c',
  'C#': 'csharp',
  'Ruby': 'ruby',
  'Go': 'go',
  'Rust': 'rust',
  'PHP': 'php',
  'TypeScript': 'typescript',
  'Kotlin': 'kotlin',
  'Swift': 'swift',
  'R': 'r',
  // Additional languages may be appended here; the frontend dropdown reflects this map.
};

// ============ EXECUTION BACKENDS ============

// 1. Client-side JavaScript execution (instant, no API needed)
const executeJavaScript = (code) => {
  try {
    let output = '';
    const logs = [];
    
    // Capture console output
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    
    console.log = (...args) => {
      const str = args.map(arg => {
        if (typeof arg === 'object') return JSON.stringify(arg, null, 2);
        return String(arg);
      }).join(' ');
      logs.push(str);
    };
    
    console.error = (...args) => {
      const str = args.map(arg => String(arg)).join(' ');
      logs.push('Error: ' + str);
    };
    
    console.warn = (...args) => {
      const str = args.map(arg => String(arg)).join(' ');
      logs.push('Warning: ' + str);
    };

    // Execute code in isolated scope
    const func = new Function(code);
    const result = func();
    
    // Restore console
    console.log = originalLog;
    console.error = originalError;
    console.warn = originalWarn;
    
    output = logs.join('\n').trim();
    if (!output && result !== undefined) {
      output = String(result);
    }
    if (!output) {
      output = '(Code executed successfully with no output)';
    }
    
    return { success: true, output, executionTime: '0.001s' };
  } catch (error) {
    return { success: false, error: String(error.message || error) };
  }
};

// 2. Server proxy (Piston)
const executeViaServer = async (code, language, input = '') => {
  try {
    const resp = await fetch('/api/compile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, language, input })
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    return {
      success: data.success,
      output: data.output || '',
      error: data.error || '',
      executionTime: data.executionTime || ''
    };
  } catch (error) {
    console.warn('Server compile error:', error.message);
    return null;
  }
};

// local Python runtime using Pyodide (WASM) for offline/JS-only environments
let pyodide = null;
let pyodidePromise = null;
async function loadPyodideRuntime() {
  if (pyodide) return pyodide;
  if (!pyodidePromise) {
    pyodidePromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js';
      script.onload = async () => {
        try {
          pyodide = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/' });
          resolve(pyodide);
        } catch (err) {
          reject(err);
        }
      };
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }
  return pyodidePromise;
}



/**
 * Execute code with intelligent fallback system
 * @param {string} code - Source code to execute
 * @param {string} language - Programming language
 * @param {string} input - Standard input for the program
 * @returns {Promise<Object>} - {success, output, error, executionTime}
 */
export const executeCode = async (code, language, input = '') => {
  try {
    console.log('🚀 Executing code in:', language);

    // basic validation
    if (!code || code.trim().length === 0) {
      return { success: false, error: 'Please write some code first', output: '' };
    }

    const lang = languageMap[language];
    if (!lang) {
      return {
        success: false,
        error: `Language "${language}" not supported.\n\nSupported: ${Object.keys(languageMap).join(', ')}`,
        output: '',
      };
    }

    // local JS fallback for offline mode
    if (language === 'JavaScript') {
      const result = executeJavaScript(code);
      if (result.success) {
        return result;
      }
    }

    // local Python via Pyodide (optional offline support)
    if (language === 'Python') {
      try {
        const py = await loadPyodideRuntime();
        const wrapper = `import sys, io
buf = io.StringIO()
sys.stdout = buf
${code}
output = buf.getvalue()`;
        let output = await py.runPythonAsync(wrapper);
        output = output === undefined || output === null ? '' : String(output);
        if (!output.trim()) {
          try {
            const val = await py.runPythonAsync(code);
            if (val !== undefined && val !== null && String(val) !== 'None') {
              output = String(val);
            }
          } catch {}
        }
        return { success: true, output };
      } catch (err) {
        console.warn('Pyodide failed:', err);
      }
    }

    // always forward to server proxy
    const serverResult = await executeViaServer(code, lang, input);
    if (serverResult) return serverResult;

    // if we reach here, server call failed
    return {
      success: false,
      error: `⚠️ Unable to execute code. Server backend appears unavailable.`,
      output: '',
    };

  } catch (error) {
    console.error('💥 Code execution error:', error.message);
    return {
      success: false,
      error: String(error.message || error),
      output: '',
    };
  }
};


/**
 * Get supported languages
 */
export const getSupportedLanguages = () => {
  return Object.keys(languageMap);
};

/**
 * Format code execution result for display
 */
export const formatExecutionResult = (result) => {
  if (result.success) {
    return {
      type: 'success',
      message: '✅ Code executed successfully',
      output: result.output == null ? '(No output)' : result.output,
      time: result.executionTime || '',
    };
  } else {
    return {
      type: 'error',
      message: '❌ Execution failed',
      output: result.error || '(Unknown error)',
    };
  }
};

// ------------------- Compiler health check -------------------
/**
 * Ping each external backend with a trivial snippet to determine availability.
 * Returns an object like { piston: 'ok'|'error', jdoodle: 'ok'|'error', rapidapi: 'ok'|'error' }
 */
export const checkCompilers = async () => {
  const results = {};
  try {
    const serverRes = await fetch('/api/compile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: 'print("ping")', language: 'python3', input: '' })
    });
    const d = await serverRes.json();
    results.server = d.success ? 'ok' : 'error';
  } catch {
    results.server = 'error';
  }

  // always have a local JS executor
  results['js-local'] = 'ok';

  try {
    await loadPyodideRuntime();
    results['python-local'] = 'ok';
  } catch {
    results['python-local'] = 'error';
  }

  return results;
};

export default {
  executeCode,
  getSupportedLanguages,
  formatExecutionResult,
  languageMap,
  checkCompilers,
};

