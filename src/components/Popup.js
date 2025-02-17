import React, { useState, useEffect } from 'react';
import './Popup.css';

function Popup() {
  const [clipboardText, setClipboardText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch clipboard content from background.js
  const fetchClipboard = () => {
    setLoading(true);
    chrome.runtime.sendMessage({ action: "getClipboard" }, (response) => {
      setLoading(false);
      if (response?.clipboard) {
        setClipboardText(response.clipboard);
        setError('');
      } else {
        setClipboardText('');
        setError(response?.error || 'Failed to access clipboard');
      }
    });
  };

  // Automatically fetch clipboard on component load
  useEffect(() => {
    fetchClipboard();
  }, []);

  return (
    <div className="popup-container">
      <h1>📋 Smart Note-Taking Tool </h1>
      
      <button onClick={fetchClipboard} className="fetch-btn">
        {loading ? 'Fetching...' : 'Refresh Clipboard'}
      </button>

      {clipboardText && (
        <div className="clipboard-content">
          <strong>📎 Clipboard Content:</strong>
          <p>{clipboardText}</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      )}

      <footer className="footer">
        <p>🔒notes is private and stored locally.</p>
      </footer>
    </div>
  );
}

export default Popup;
