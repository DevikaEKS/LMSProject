import React, { useState } from 'react';
import './Codecompiler.css'; // Ensure you have this CSS file for styling

function CodeEditor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleRunCode = () => {
    // Store original console.log
    const originalConsoleLog = console.log;

    // Create a new array to capture logs
    const logs = [];
    console.log = (...args) => {
      logs.push(args.join(' '));
    };

    try {
      // Evaluate the code
      new Function(code)();
    } catch (err) {
      setError('Error: ' + err.message);
      setOutput('');
    } finally {
      // Restore original console.log and set output
      console.log = originalConsoleLog;
      setOutput(logs.join('\n'));
    }
  };

  return (
    <div className="editor-container">
      <h2>JavaScript Code Editor</h2>
      <textarea
        className="code-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows="10"
        cols="50"
        placeholder="Write your JavaScript code here..."
      />
      <button className="run-button" onClick={handleRunCode}>Run Code</button>
      {error && <div className="error">{error}</div>}
      <pre className="output">{output}</pre>
    </div>
  );
}

export default CodeEditor;
