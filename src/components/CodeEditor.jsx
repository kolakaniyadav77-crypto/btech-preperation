import React, { useState, useEffect } from 'react';
import '../styles/CodeEditor.css';
import codeCompilerService from '../services/codeCompilerService';

const CodeEditor = ({ 
  initialCode = '', 
  language = 'Python', 
  onCodeChange, 
  showCompiler = true,
  allowLanguageChange = true,
  onLanguageChange
}) => {
  const [code, setCode] = useState(initialCode);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [showInput, setShowInput] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [compilerStatus, setCompilerStatus] = useState(null); // { piston: 'ok'|'error', ... }

  // available languages are pulled from the compiler service so that adding new compilers
  // automatically updates every UI component.
  const languages = codeCompilerService.getSupportedLanguages();

  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);
    if (onCodeChange) {
      onCodeChange(newCode);
    }
  };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    if (onLanguageChange) {
      onLanguageChange(newLanguage);
    }
  };

  // Sync local code state when `initialCode` prop changes (allows loading saved practice code)
  useEffect(() => {
    setCode(initialCode || '');
  }, [initialCode]);

  // Sync selected language when `language` prop changes
  useEffect(() => {
    if (language && language !== selectedLanguage) {
      setSelectedLanguage(language);
    }
  }, [language, selectedLanguage]);

  const handleExecute = async () => {
    setIsExecuting(true);
    setExecutionResult(null);
    setShowOutput(true);

    try {
      // Use codeCompilerService.executeCode if available
      const res = await codeCompilerService.executeCode(code, selectedLanguage, input);

      if (res.success) {
        setOutput(res.output || '(No output)');
        setExecutionResult({ success: true, executionTime: res.executionTime, memory: res.memory });
      } else {
        // format error or message from service
        const errMsg = res.error || res.output || res.message || 'Unknown error from compiler';
        setOutput(errMsg);
        setExecutionResult({ success: false, error: errMsg, statusDescription: res.statusDescription });
      }
    } finally {
      setIsExecuting(false);
    }
  };

  const handleClearCode = () => {
    setCode('');
    setInput('');
    setOutput('');
    setExecutionResult(null);
    if (onCodeChange) {
      onCodeChange('');
    }
  };

  const handleCheckCompilers = async () => {
    setIsExecuting(true);
    setExecutionResult(null);
    setShowOutput(true);
    setOutput('Checking compiler backends...');

    try {
      const status = await codeCompilerService.checkCompilers();
      setOutput(JSON.stringify(status, null, 2));
      setExecutionResult({ success: true });
    } catch (e) {
      setOutput('Error checking compilers: ' + (e.message || e));
      setExecutionResult({ success: false, error: e.message || '' });
    } finally {
      setIsExecuting(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  // determine if selected language can actually run given current compiler statuses
  const languageHasLocalFallback = (lang) => {
    if (!lang) return false;
    return lang === 'JavaScript' || lang === 'Python';
  };

  const canRunLanguage = () => {
    if (!showCompiler) return false;
    if (!compilerStatus) return true; // assume available until we know otherwise

    const anyRemoteOk = ['server', 'piston', 'jdoodle', 'rapidapi'].some(k => compilerStatus[k] === 'ok');
    const hasLocal = languageHasLocalFallback(selectedLanguage) &&
      ((selectedLanguage === 'JavaScript' && compilerStatus['js-local'] === 'ok') ||
       (selectedLanguage === 'Python' && compilerStatus['python-local'] === 'ok'));
    return anyRemoteOk || hasLocal;
  };

  // check compiler status when component mounts (if compiler UI is shown)
  useEffect(() => {
    if (!showCompiler) return;
    codeCompilerService.checkCompilers()
      .then(status => setCompilerStatus(status))
      .catch(err => {
        console.warn('Unable to fetch compiler status', err);
        setCompilerStatus({ error: 'unknown' });
      });
  }, [showCompiler]);


  const codeEditorContent = (
    <div className="code-editor-wrapper">
      {/* show warning only if *no* remote/server backends are reachable; JS-local always reports ok */}
      {(compilerStatus &&
        !(
          compilerStatus.server === 'ok' ||
          compilerStatus.piston === 'ok' ||
          compilerStatus.jdoodle === 'ok' ||
          compilerStatus.rapidapi === 'ok' ||
          compilerStatus['python-local'] === 'ok'
        ) &&
        // if we don't even have a js-local status (old versions), fall back to old check
        Object.values(compilerStatus).every(v => v !== 'ok')
      ) && (
        <div className="compiler-warning-banner">
          ⚠️ Remote compilation backends are currently unreachable. Only JavaScript and/or in-browser Python will run locally.
          Please check your internet connection or ensure the backend server is running.
        </div>
      )}
      <div className="editor-header">
        <div className="editor-controls">
          {allowLanguageChange && (
            <div className="language-selector">
              <label>Language:</label>
              <select 
                value={selectedLanguage} 
                onChange={handleLanguageChange}
                disabled={isExecuting}
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          )}
          {!allowLanguageChange && (
            <div className="language-display">
              <label>Language:</label>
              <span className="locked-language">{selectedLanguage} (Locked)</span>
            </div>
          )}
        </div>

        <div className="editor-buttons">
          <button 
            className="btn btn-execute" 
            onClick={handleExecute}
            disabled={isExecuting || !showCompiler || !canRunLanguage()}
            title={
              !showCompiler ? 'Compiler not available' :
              !canRunLanguage() ?
                `Execution unavailable: remote services down for ${selectedLanguage}. Only JavaScript/Python run locally.` :
                'Execute Code'
            }
          >
            {isExecuting ? '⏳ Executing...' : '▶ Execute'}
          </button>
          <button
            className="btn btn-check"
            onClick={handleCheckCompilers}
            disabled={isExecuting || !showCompiler}
            title="Ping remote compiler services"
          >
            🔍 Check Compilers
          </button>
          <button 
            className="btn btn-copy" 
            onClick={handleCopyCode}
            title="Copy code to clipboard"
          >
            📋 Copy
          </button>
          <button 
            className="btn btn-clear" 
            onClick={handleClearCode}
            title="Clear all code"
          >
            🗑️ Clear
          </button>
        </div>
      </div>

      <div className="editor-body">
        <div className="code-input-section">
          <div className="code-area">
            <textarea
              className="code-editor"
              value={code}
              onChange={handleCodeChange}
              placeholder="Write your code here..."
              spellCheck="false"
            />
          </div>

          {showCompiler && (
            <div className="stdin-section">
              <button 
                className="toggle-input"
                onClick={() => setShowInput(!showInput)}
              >
                {showInput ? '▼ Hide Input' : '▶ Show Input'}
              </button>
              {showInput && (
                <div className="input-area">
                  <textarea
                    className="input-editor"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter standard input here (optional)"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {showCompiler && showOutput && (
          <div className="output-section">
            <div className="output-header">
              <h4>📤 Output</h4>
              <button 
                className="toggle-output"
                onClick={() => setShowOutput(!showOutput)}
              >
                {showOutput ? '▼' : '▶'}
              </button>
            </div>

            {executionResult && (
              <div className={`execution-status ${executionResult.success ? 'success' : 'error'}`}>
                <span className="status-icon">
                  {executionResult.success ? '✓' : '✗'}
                </span>
                <span className="status-text">
                  {executionResult.success ? 'Success' : 'Error'}
                </span>
                {executionResult.executionTime && (
                  <span className="execution-time">
                    Time: {executionResult.executionTime}s
                  </span>
                )}
              </div>
            )}

            <div className="output-content">
              <pre>{output || '(No output)'}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return codeEditorContent;
};

export default CodeEditor;
