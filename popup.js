const SUGGESTIONS = "#suggestions";

// scripts
(function () {
  $("#optResults").hide();
  $("#initialSearch").on("click", function(){

    chrome.tabs.query({ active:true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id,
			      {action: "dom"},
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
  return "https://google.com/search?q=" + str.replace(/ /g,"+");
}

/*
 * updates the suggestion div
 */
function setDOM(info) {
  console.log(info);
  var text = info.suggestion;
  var aElem = '<a id="suggestedLink" class="hyperlink">' + text + '</a>' 
  $(SUGGESTIONS).html(aElem);

  var newUrl = gLink(text);
  $('#suggestedLink').on("click", function() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      chrome.tabs.update(tab.id, {url: newUrl});
    });
  });
}




