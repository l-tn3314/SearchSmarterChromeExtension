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


function setDOM(info) {
  console.log(info);
  $(SUGGESTIONS).html(info.suggestion);
}

