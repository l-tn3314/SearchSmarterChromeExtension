<<<<<<< HEAD
=======
const SUGGESTIONS = "#suggestions";
>>>>>>> e1889d2c21f04a68a5abf3a8bd80e7bcbee3086e

// scripts
(function () {
  $("#optResults").hide();
  $("#initialSearch").on("click", function(){

    chrome.tabs.query({ active:true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id,
			      {action: "dom"},
			      setDOM);
<<<<<<< HEAD
      chrome.tabs.sendMessage(tabs[0].id,
            {action: "searchResult"},
            setDOM);
=======
>>>>>>> e1889d2c21f04a68a5abf3a8bd80e7bcbee3086e
    });

    $("#optResults").show();
    $("#initialSearch").hide();
  });
} ());

(function () {
  $("#rules-and-examples").hide();
  $("#header-general-font").on("click", function(){

<<<<<<< HEAD
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
=======
    chrome.tabs.query({ active:true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id,
			      {action: "dom"},
			      setDOM);
>>>>>>> e1889d2c21f04a68a5abf3a8bd80e7bcbee3086e
    });

    $("#rules-and-examples").toggle();
  });
} ());

(function () {
  $("#suggestions").hide();
  $("#eduSuggestions").hide();
  $("#header-search-font").on("click", function(){

    chrome.tabs.query({ active:true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id,
			      {action: "dom"},
			      setDOM);
    });

    $("#suggestions").toggle();
    $("#eduSuggestions").toggle();
  });
} ());


<<<<<<< HEAD

=======
function setDOM(info) {
  $(SUGGESTIONS).html(info.suggestion);
}
>>>>>>> e1889d2c21f04a68a5abf3a8bd80e7bcbee3086e
