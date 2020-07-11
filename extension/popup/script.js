function Filter(user){

    chrome.tabs.executeScript({
        code: 'String.prototype.replaceAll = function(org, dest) {return this.split(org).join(dest);}'
    })
    //animationiteration
    chrome.tabs.executeScript({
        code: 'document.addEventListener("animationiteration", function () { var bodyText = document.getElementById("message").innerText; document.getElementById("message").innerText = bodyText.replaceAll("asd", "***"); })'
    })
}

Filter();