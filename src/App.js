import React, { useState } from 'react';
import './App.css';

function App() {
  const [clipboardText, setClipboardText] = useState('');
  const [clipboardHistory, setClipboardHistory] = useState([]);
  const [error, setError] = useState('');

  // Function to fetch current clipboard content
  const fetchClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setClipboardText(text);
      setError('');
    } catch (err) {
      setError('Failed to read clipboard content');
    }
  };

  // Function to save current clipboard content to history
  const saveToHistory = () => {
    if (clipboardText) {
      setClipboardHistory([clipboardText, ...clipboardHistory]);
    }
  };

  // Function to clear clipboard history
  const clearHistory = () => {
    setClipboardHistory([]);
  };

  return (
    <div className="app-container">
      <h1>📋  Smart Note-Taking Tool</h1>

      <button onClick={fetchClipboard}>Get Clipboard</button>
      <button onClick={saveToHistory} disabled={!clipboardText}>Save to History</button>
      <button onClick={clearHistory} disabled={clipboardHistory.length === 0}>Clear History</button>

      {clipboardText && (
        <div className="clipboard-content">
          <strong>Current Clipboard:</strong>
          <p>{clipboardText}</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      )}

      {clipboardHistory.length > 0 && (
        <div className="history-section">
          <h2>Clipboard History</h2>
          <ul>
            {clipboardHistory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
