
// scripts
(function () {
  $("#optResults").hide();
  $("#initialSearch").on("click", function(){

    chrome.tabs.query({ active:true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id,
			      {action: "dom"},
			      setDOM);
      chrome.tabs.sendMessage(tabs[0].id,
            {action: "searchResult"},
            setDOM);
    });
    
    console.log("sent");
    $("#optResults").show();
    $("#initialSearch").hide();
  });
} ());


/*
 * returns a google search link for the given string
 */
function gLink(str) {
  console.log(str)
  return "https://google.com/search?q=" + str.replace(/ /g,"+");
}

/*
 * updates the suggestion div
 */
function setDOM(info) {
  console.log(info);
  console.log(info.divId);
  console.log(info.newId);
  var text = info.suggestion;
  var divId = info.divId;
  var newId = info.newId;

  var aElem = '<a id="' + newId + '" class="hyperlink">' + text + '</a>' 
  $(divId).html(aElem);

  var newUrl = gLink(text);
  console.log(newUrl);
  $(newId).on("click", function() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      chrome.tabs.update(tab.id, {url: newUrl});
    });
  });
}





