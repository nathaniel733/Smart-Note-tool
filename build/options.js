document.getElementById('options-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const saveHistory = document.getElementById('saveHistory').checked;
    chrome.storage.sync.set({ saveHistory }, () => {
      alert('Options saved successfully!');
    });
  });
  
  // Load saved settings
  chrome.storage.sync.get(['saveHistory'], (result) => {
    document.getElementById('saveHistory').checked = result.saveHistory ?? true;
  });
  