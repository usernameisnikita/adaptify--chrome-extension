chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ fontEnabled: false });
});
