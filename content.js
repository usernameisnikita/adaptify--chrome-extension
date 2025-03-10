chrome.storage.local.get("fontEnabled", function (data) {
    if (data.fontEnabled) {
        document.body.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
    }
});
