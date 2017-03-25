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
setTimeout(function() {
//  console.log($(SEARCH_BAR_ID).text());

  //console.log($('body'));
  //console.log($(SEARCH_BAR_ID).val());
  //console.log($('input[name="q"]').value);
  //console.log($('input'));
  console.log(getSearch());
}, 3000);


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
	     words.indexOf("is") == 1 + (words.indexOf("what"))) {
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
function tpSentence(words) {
  var str = "";
  for (var i = 0; i < words.length; i++) {
    str = str.concat(words[i]);
  }
  return str;
}

/*
 * Returns a String based on the given number (flag)
 */
function definePatternSuggestions(num, words) {
  switch(num) {
  case 1:
    const defInd = words.indexOf("define");
    const wordsCopy = words.slice(defInd);
    wordsCopy.unshift("does");
    wordsCopy.unshift("what");
    wordsCopy.push("mean");
    //wordsCopy.splice(defInd, 1);
    return toSentence(wordsCopy);
  case 2:
    const wordsCopy = words.slice(0);
    const ind = wordsCopy.indexOf("meaning");
    wordsCopy.splice(ind, 1);
    wordsCopy.unshift("define");
    return toSentence(wordsCopy);
  case 3:
    const wordsCopy = words.slice(0);
    const whatId = wordsCopy.indexOf("what");
    wordsCopy.splice(whatInd, 2);
    wordsCopy.unshift("define");
    return toSentence(wordsCopy);
  case 4:
    const wordsCopy = words.slice(0);
    const whatId = wordsCopy.indexOf("what");
    wordsCopy.splice(whatId, 1);
    const doesId = wordsCopy.indexOf("does");
    wordsCopy.splice(doesId, 1);
    const meanId = wordsCopy.indexOf("mean");
    wordsCopy.splice(meanId, 1);
    wordsCopy.unshift("define");
    return toSentence(wordsCopy);
  default:
    return toSentence(words);
  }

}
