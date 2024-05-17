chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.url.includes('github.com') && details.url.includes('/pull/')) {
        console.log('Sending message to content script to check PR status');
        chrome.tabs.sendMessage(details.tabId, { action: "checkPRStatus" });
    }
}, { url: [{ hostContains: 'github.com' }] });