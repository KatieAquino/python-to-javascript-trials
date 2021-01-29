"use strict";

// returns a list of unique words that appear in words1 & words2
function wordsInCommon(words1, words2) {
  const wordsSet1 = new Set(words1);
  const wordsSet2 = new Set(words2);

  const result = new Set();

  for (const word1 of wordsSet1) {
    if (wordsSet2.has(word1) == true) {
      result.add(word1);
    }
  }
  return result;
}


function kidsGame(names) {
  // Replace this with your code
}
