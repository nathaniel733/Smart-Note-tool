// Log when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log('Smart Clipboard Manager installed.');
});

// Listen for messages from the popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getClipboard") {
    navigator.clipboard.readText()
      .then((clipText) => {
        sendResponse({ clipboard: clipText });
      })
      .catch((error) => {
        console.error('Failed to read clipboard:', error);
        sendResponse({ error: 'Failed to read clipboard' });
      });
    return true; // Indicates an asynchronous response
  }
});

function saveClipboardText(text) {
  chrome.storage.local.get({ history: [] }, (result) => {
    const history = result.history;
    history.unshift({
      text,
      timestamp: new Date().toLocaleString()
    });
    chrome.storage.local.set({ history });
  });
}

// Optional: Add a context menu to quickly access clipboard
chrome.contextMenus.create({
  id: "viewClipboard",
  title: "Show Clipboard Content",
  contexts: ["all"]
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "COPY_TEXT") {
    saveClipboardText(message.text);
  }
});
// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "viewClipboard") {
    chrome.tabs.create({ url: "index.html" });
  }
});

// Handle extension updates
chrome.runtime.onUpdateAvailable.addListener(() => {
  console.log('A new version is available. Updating...');
  chrome.runtime.reload();
});
