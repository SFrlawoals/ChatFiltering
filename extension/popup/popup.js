'use strict';

function getimage() {
  chrome.tabs.executeScript(null, {
    file : 'getimage.js'
  }, function() {
    window.close();
  });
}

function youtube() {
  chrome.tabs.executeScript(null, {
    file : 'youtube/response.js'
  }, function(obj) {
    chrome.tabs.executeScript(null, {
      code:"document.querySelector('#downloadstation a').click();"
    }, function() {
      window.close();
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var btns = document.querySelectorAll('button');
  for (var i = 0; i < btns.length; i++) {
    let btn = btns[i];
    if(btn.id == "getimage") {
      btn.addEventListener('click', getimage);
    }
    else if(btn.id == "youtube") {
      btn.addEventListener('click', youtube);
    }
  }
});