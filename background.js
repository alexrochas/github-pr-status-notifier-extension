chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.url.includes('github.com') && details.url.includes('/pull/')) {
        chrome.tabs.sendMessage(details.tabId, { action: "checkPRStatus" });
    }
}, { url: [{ hostContains: 'github.com' }] });