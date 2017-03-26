const SUGGESTIONS = "#suggestions";
const EDUSUGGESTIONS = '#eduSuggestions'

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
            setSearchResult);
    });
    
    console.log("sent");
    $("#optResults").show();
    $("#initialSearch").hide();
  });
} ());


function setDOM(info) {
  console.log(info);
  $(SUGGESTIONS).html(info.suggestion);
  $(EDUSUGGESTIONS).html(info.)
}

function setSearchResult(info) {
  console.log(info);
  $(EDUSUGGESTIONS).html(info.suggestion)
}

