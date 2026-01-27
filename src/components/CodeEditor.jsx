import React, { useState } from 'react';
import '../styles/CodeEditor.css';

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

  const languages = ['Python', 'JavaScript', 'Java', 'C++', 'C#', 'Ruby', 'Go', 'Rust'];

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

  const handleExecute = async () => {
    setIsExecuting(true);
    setExecutionResult(null);
    setShowOutput(true);

    try {
      setOutput('Code execution is disabled. This is a code editor for viewing and editing code only. To run code, integrate with a code compiler service like Judge0.');
      setExecutionResult({
        success: false,
        error: 'Compiler not available',
        output: 'Please add a code compiler API to enable execution.',
      });
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

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  const codeEditorContent = (
    <div className="code-editor-wrapper">
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
            disabled={isExecuting || !showCompiler}
            title={showCompiler ? 'Execute Code' : 'Compiler not available'}
          >
            {isExecuting ? '⏳ Executing...' : '▶ Execute'}
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
