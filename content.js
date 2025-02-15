// content.js: Runs in the context of web pages
console.log('Smart Clipboard Manager content script loaded!');

// Optional Example: Highlight copied text on the page
document.addEventListener('copy', () => {
  console.log('Text copied:', window.getSelection().toString());
});

document.addEventListener('copy', () => {
  const copiedText = window.getSelection().toString().trim();
  if (copiedText) {
    chrome.runtime.sendMessage({ type: "COPY_TEXT", text: copiedText });
    console.log(`Copied: ${copiedText}`);
  }
});
