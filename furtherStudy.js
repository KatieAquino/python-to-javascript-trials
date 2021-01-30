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

  //Get first words and remove from consideration, added to output
  const output = [names.shift()];

  const firstLetterToWords = {};

  for (const name of names) {
    const firstChar = name[0]
    if (!firstLetterToWords[firstChar]) {
      firstLetterToWords[firstChar] = name;
    }
    else {
      firstLetterToWords[firstChar].push(name);
    }
  }

  while (true) {

    const lastWord = output[output.length -1];
    const lastWordChar = lastWord[lastWord.length -1];

    if (firstLetterToWords[lastWordChar] == undefined || 
        firstLetterToWords[lastWordChar].length === 0) {
          break;
    }
    else {
      const nextWord = firstLetterToWords[lastWordChar].shift();
      output.push(nextWord);
    }
  }
  return output;
}
