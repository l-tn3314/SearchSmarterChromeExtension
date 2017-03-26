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

    $("#optResults").show();
    $("#initialSearch").hide();
  });
} ());

(function () {
  $("#rules-and-examples").hide();
  $("#header-general-font").on("click", function(){

    chrome.tabs.query({ active:true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id,
			      {action: "dom"},
			      setDOM);
    });

    $("#rules-and-examples").toggle();
  });
} ());

(function () {
  $("#suggestion").hide();
  $("#header-search-font").on("click", function(){

    chrome.tabs.query({ active:true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id,
			      {action: "dom"},
			      setDOM);
    });

    $("#suggestion").toggle();
  });
} ());


function setDOM(info) {
  $(SUGGESTIONS).html(info.suggestion);
}
