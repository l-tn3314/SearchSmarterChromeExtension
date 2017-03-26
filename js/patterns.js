// scripts

const SEARCH_BAR_ID = "#lst-ib";

/*
 * Returns a String[] of the words in the search (in the inputted order)
 */
var getSearch = function() {
  var sentence = $(SEARCH_BAR_ID).val();
  if (sentence == null) {
    sentence = " " 
  }
  const words = sentence.split(" ");
  return words;
}


/*
 * Returns an integer for if the given String[] words fit the define pattern
 * -1 if it does not fit the pattern
 * 1 if it contains the word "define"
 * 2 if it contains the word "meaning" 
 * 3 if it contains the words "what", "is" successively
 * 4 if it contains the words "what", "does", "mean"
 */
function definePattern(words) {
  if (-1 < words.indexOf("define")) {
    return 1;
  } else if (-1 < words.indexOf("meaning")) {
    return 2;
  } else if (-1 < words.indexOf("what") &&
	     words.indexOf("is") == 1 + words.indexOf("what")) {
    return 3;
  } else if (-1 < words.indexOf("what") &&
	     -1 < words.indexOf("does") &&
	     -1 < words.indexOf("mean")) {
    return 4;
  } else {
    return -1;
  }
}

/*
 * Returns a string with the elements in the array separated by a string
 * [1,2,3] -> "1 2 3" 
 */
function toSentence(words) {
  var str = "";
  for (var i = 0; i < words.length - 1; i++) {
    str = str.concat(words[i]);
    str = str.concat(" ");
  }
  if (words.length > 0) {
    str = str.concat(words[words.length - 1]);
  }
  return str;
}
/*
 * Returns a String based on the given number (flag)
 */
function definePatternSuggestions(num, words) {
  switch(num) {
  case 1:
    var defInd = words.indexOf("define");
    var wordsCopy = words.slice(defInd);
    wordsCopy.splice(0, 1);
    wordsCopy.unshift("does");
    wordsCopy.unshift("what");
    wordsCopy.push("mean");
    //wordsCopy.splice(defInd, 1);
    return toSentence(wordsCopy);
  case 2:
    var wordsCopy = words.slice(0);
    var ind = wordsCopy.indexOf("meaning");
    wordsCopy.splice(ind, 1);
    wordsCopy.unshift("define");
    return toSentence(wordsCopy);
  case 3:
    var wordsCopy = words.slice(0);
    var whatId = wordsCopy.indexOf("what");
    wordsCopy.splice(whatId, 2);
    wordsCopy.unshift("define");
    return toSentence(wordsCopy);
  case 4:
    var wordsCopy = words.slice(0);
    var whatId = wordsCopy.indexOf("what");
    wordsCopy.splice(whatId, 1);
    var doesId = wordsCopy.indexOf("does");
    wordsCopy.splice(doesId, 1);
    var meanId = wordsCopy.indexOf("mean");
    wordsCopy.splice(meanId, 1);
    wordsCopy.unshift("define");
    return toSentence(wordsCopy);
  default:
    return "";//toSentence(words);
  }
}


// listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, response) {
  
  if (request.action == "dom") {
    var words = getSearch();
    var patternId = definePattern(words);
    var altern = definePatternSuggestions(patternId, words);
    var domObj = {
      suggestion: altern,
      divId: "suggestions",
      newId: "suggestedLink"
    };
    // callback
    response(domObj);///, "#suggestions", "#suggestedLink");
  }
  if (request.action == "searchResult") {
    var stringSearch = toSentence(getSearch())
    console.log(stringSearch)
    var domObj = {
      suggestion: "site:.edu " + stringSearch,
      divId: "eduSuggestions",
      newId: "eduSuggestedLink"
    };
    // callback
    response(domObj);//, "#eduSuggestions", "#eduSuggestedLink");
  }
  if (request.action == "pptResult") {
    var stringSearch = toSentence(getSearch());
    console.log(stringSearch)
    var domObj = {
      suggestion: '"' + stringSearch + '"' + " filetype:ppt ",
      divId: "pptSuggestions",
      newId: "pptSuggestedLink"
    };
    // callback
    response(domObj);//, "#eduSuggestions", "#eduSuggestedLink");
  }
  if (request.action == "pdfResult") {
    var stringSearch = toSentence(getSearch());
    console.log(stringSearch)
    var domObj = {
      suggestion: '"' + stringSearch + '"' + " filetype:pdf ",
      divId: "pdfSuggestions",
      newId: "pdfSuggestedLink"
    };
    // callback
    response(domObj);//, "#eduSuggestions", "#eduSuggestedLink");
  }
});

setTimeout(function() {
//  console.log($(SEARCH_BAR_ID).text());

  //console.log($('body'));
  //console.log($(SEARCH_BAR_ID).val());
  //console.log($('input[name="q"]').value);
  //console.log($('input'));
  console.log(getSearch());
  var words = getSearch();
  var patternId = definePattern(words);
  var altern = definePatternSuggestions(patternId, words);
  console.log(altern);
}, 3000);

