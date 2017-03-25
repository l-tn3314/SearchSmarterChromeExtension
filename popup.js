// scripts

chrome.extension.onMessage.addListener(function(request) {
  if (request.welp) {
    console.log("yes");
    display();
  }

});

function display() {
  var div = document.createElement('div');
  var text = document.createTextNode('hello world');
  div.appendChild(text);
  document.body.appendChild(text);
}


/*
function activate(callback) {
  
  const queryInfo = {
    active: true,
    currentWindow: true
  };
  
  chrome.tabs.query(queryInfo, function(tabs) {
    const tab = tabs[0];
    //tab.index;
    console.log(tab.id);
    callback(tab.id)
  });		    
}

activate(chrome.pageAction.show);

//chrome.declarativeContent.ShowPageAction();
*/

