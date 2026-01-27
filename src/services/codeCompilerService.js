// Code Compiler Service
// Uses Judge0 API to execute code in multiple programming languages
// Free tier: judge0.com

const JUDGE0_API_URL = 'https://judge0-ce.p.rapidapi.com/submissions';
const JUDGE0_API_KEY = process.env.REACT_APP_JUDGE0_API_KEY;

// Language mapping for Judge0
export const languageMap = {
  'Python': 71,      // Python 3.8
  'Java': 62,        // Java (OpenJDK 13.0.1)
  'JavaScript': 63,  // JavaScript (Node.js 12.14.0)
  'C++': 53,         // C++ (GCC 9.2.0)
  'C': 49,           // C (GCC 9.2.0)
  'Go': 60,          // Go (1.13.5)
  'Rust': 73,        // Rust (1.40.0)
  'C#': 51,          // C# (Mono 6.6.0.161)
  'PHP': 68,         // PHP (7.4.1)
  'Ruby': 72,        // Ruby (2.7.0)
  'TypeScript': 74,  // TypeScript (3.7.4)
};

/**
 * Execute code in the specified language
 * @param {string} code - Source code to execute
 * @param {string} language - Programming language
 * @param {string} input - Standard input for the program
 * @returns {Promise<Object>} - Execution result with output, errors, etc.
 */
export const executeCode = async (code, language, input = '') => {
  try {
    if (!JUDGE0_API_KEY) {
      return {
        success: false,
        output: 'Code execution is currently unavailable. To enable this feature, please add REACT_APP_JUDGE0_API_KEY to your environment variables.',
        stderr: '',
        status: { id: 0, description: 'API Key Missing' }
      };
    }
    
    const languageId = languageMap[language];
    if (!languageId) {
      throw new Error(`Language '${language}' is not supported`);
    }

    // Create submission
    const createResponse = await fetch(JUDGE0_API_URL + '?base64_encoded=true&wait=false', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': JUDGE0_API_KEY,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      body: JSON.stringify({
        language_id: languageId,
        source_code: btoa(code), // Base64 encode
        stdin: btoa(input),      // Base64 encode
      }),
    });

    if (!createResponse.ok) {
      throw new Error('Failed to create submission');
    }

    const createData = await createResponse.json();
    const token = createData.token;

    // Poll for result
    let result = null;
    let attempts = 0;
    const maxAttempts = 30; // 30 attempts * 1 second = 30 seconds timeout

    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second

      const getResponse = await fetch(`${JUDGE0_API_URL}/${token}?base64_encoded=true`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': JUDGE0_API_KEY,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
      });

      if (!getResponse.ok) {
        throw new Error('Failed to fetch result');
      }

      const data = await getResponse.json();

      // Status: 1 = In Queue, 2 = Processing, 3 = Accepted, 4+ = Other statuses
      if (data.status.id > 2) {
        result = data;
        break;
      }

      attempts++;
    }

    if (!result) {
      throw new Error('Execution timeout - code took too long to execute');
    }

    // Decode output
    const output = result.stdout ? atob(result.stdout) : '';
    const stderr = result.stderr ? atob(result.stderr) : '';
    const compilationError = result.compile_output ? atob(result.compile_output) : '';

    return {
      success: result.status.id === 3,
      output: output,
      error: stderr || compilationError,
      statusId: result.status.id,
      statusDescription: result.status.description,
      executionTime: result.time,
      memory: result.memory,
    };
  } catch (error) {
    console.error('Code Execution Error:', error);
    return {
      success: false,
      error: error.message,
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
 * Format code execution result
 */
export const formatExecutionResult = (result) => {
  if (result.success) {
    return {
      type: 'success',
      message: 'Code executed successfully',
      output: result.output || '(No output)',
      details: `Time: ${result.executionTime}s | Memory: ${result.memory}KB`,
    };
  } else {
    return {
      type: 'error',
      message: 'Code execution failed',
      output: result.error || '(Unknown error)',
      details: result.statusDescription || '',
    };
  }
};

export default {
  executeCode,
  getSupportedLanguages,
  formatExecutionResult,
  languageMap,
};
