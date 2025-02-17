<!DOCTYPE html>
<html>
<head>
  <title>Smart Note-Taking Tool Extension - README</title>
</head>
<body>
  <h1>📝 Smart Note-Taking Tool Chrome Extension</h1>

  <h2>📜 About</h2>
  <p>The Smart Note-Taking Tool extension allows users to quickly create, edit, and save notes directly within their browser, enhancing productivity during browsing sessions.</p>

  <h2>🛠️ Technologies and Version</h2>
  <ul>
    <li><strong>Version:</strong> 1.0.0</li>
    <li>React 18</li>
    <li>Chrome Extensions API</li>
    <li>JavaScript (ES6+)</li>
    <li>HTML5/CSS3</li>
  </ul>

  <h2>⚙️ How to Run</h2>
  <ol>
    <li>Clone the repository:<br>
      <code>git clone https://github.com/yourusername/smart-note-tool.git</code>
    </li>
    <li>Navigate to the project directory and run:<br>
      <code>npm install</code> (to install dependencies)<br>
      <code>npm run build</code> (to create a production build)
    </li>
    <li>Open Chrome and visit <strong>chrome://extensions</strong>.</li>
    <li>Enable <strong>Developer mode</strong> (toggle at the top right).</li>
    <li>Click <strong>Load unpacked</strong> and select the <strong>build</strong> folder.</li>
  </ol>

  <h2>💡 Features</h2>
  <ul>
    <li>Create, edit, and delete notes directly from the extension popup.</li>
    <li>Automatically saves notes using <code>chrome.storage</code> for persistence.</li>
    <li>Supports markdown-style formatting.</li>
  </ul>

  <h2>🚧 Challenges Faced</h2>
  <ul>
    <li>Managing state persistence using Chrome Storage.</li>
    <li>Optimizing React performance for a lightweight extension.</li>
  </ul>

  
</body>
</html>
