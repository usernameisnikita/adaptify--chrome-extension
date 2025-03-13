document.addEventListener("DOMContentLoaded", function () {
    const toggleFontButton = document.getElementById("toggleFont");

    toggleFontButton.addEventListener("click", function () {
        chrome.storage.local.get("fontEnabled", function (data) {
            const newState = !data.fontEnabled;
            chrome.storage.local.set({ fontEnabled: newState }, function () {
                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    if (tabs[0]) {
                        chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            function: () => location.reload()
                        });
                    }
                });
            });
        });
    });
});
