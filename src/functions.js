// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(word) {
  let wordInReverse = word.split('').reverse().join('');
  if (word === wordInReverse) {
    return true;
  }
  return false;
}
verifyPalindrome('arara');
verifyPalindrome('desenvolvimento');

// Requisito 2 - Crie a função getHighestIndex

function getHighestIndex(array) {
  let highestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  return array.indexOf(highestNumber);
}

getHighestIndex([2, 3, 6, 7, 10, 1]);
getHighestIndex([9, 1, 3, 5, 7]);
getHighestIndex([-9, -1, -3, -5, -7]);

// Requisito 3 - Crie a função getSmallestIndex

function getSmallestIndex(array) {
  let smallestNumber = array[0];
  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] < smallestNumber) {
      smallestNumber = array[index];
    }
  }
  return array.indexOf(smallestNumber);
}

getSmallestIndex([2, 3, 6, 7, 10, 1]);
getSmallestIndex([2, 4, 6, 7, 10, 0, -3]);

// Requisito 4 - Crie a função getLongestWord

function getLongestWord(arrayWords) {
  let longestWord = arrayWords[0];

  for (let index = 0; index < arrayWords.length; index += 1) {
    if (arrayWords[index].length > longestWord.length) {
      longestWord = arrayWords[index];
    }
  }
  return longestWord;
}
getLongestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
getLongestWord(['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix']);

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

function countHighestNumberMaxOccurrences(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let maxOccurrences = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > highestNumber) {
      highestNumber = arrayNumbers[index];
    }
  }
  for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
    if (highestNumber === arrayNumbers[index2]) {
      maxOccurrences += 1;
    }
  }
  return maxOccurrences;
}
countHighestNumberMaxOccurrences([1, 9, 2, 3, 9, 5, 7]);
countHighestNumberMaxOccurrences([0, 4, 4, 4, 9, 2, 1]);
countHighestNumberMaxOccurrences([-2, -2, -1]);
countHighestNumberMaxOccurrences([0, 0, 0]);

// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => { }),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => { }),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => { }),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => { }),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => { }),
};
