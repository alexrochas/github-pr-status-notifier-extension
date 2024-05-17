chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "checkPRStatus") {
        checkPRStatus();
    }
});

function checkPRStatus() {
    // Wait for the PR status to be available in the DOM
    const interval = setInterval(() => {
        const approvedDiv = document.querySelector('div.completeness-indicator-success');
        const mergedDiv = document.querySelector('.TimelineItem-badge > svg.octicon-git-branch');

        if (approvedDiv) {
            clearInterval(interval);
            changeTabIcon('approved');
        } else if (mergedDiv) {
            clearInterval(interval);
            changeTabIcon('merged');
        }
    }, 1000);
}

function changeTabIcon(status) {
    const link = document.createElement('link');
    const oldLink = document.querySelector('link[rel="alternate icon"]');

    link.rel = 'alternate icon';
    link.type = 'image/png';
    link.class = 'class="js-site-favicon"';

    if (status === 'approved') {
        link.href = chrome.runtime.getURL('images/approved_icon.png');
    } else if (status === 'merged') {
        link.href = chrome.runtime.getURL('images/merged_icon.png');
    }

    if (oldLink) {
        document.head.removeChild(document.querySelector('link[rel="icon"]'))
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}
