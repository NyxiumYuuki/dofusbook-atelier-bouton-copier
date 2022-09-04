chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if(changeInfo.status == 'complete' && tab.url == 'https://www.dofusbook.net/fr/outils/atelier' && tab.status == 'complete'){
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["dofusbook.atelier.copy.js"]
            });
        }
    });
});
