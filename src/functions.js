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
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < smallestNumber) {
      smallestNumber = array[index];
    }
    return array.indexOf(smallestNumber);
  }
}

getSmallestIndex([2, 3, 6, 7, 10, 1]);
getSmallestIndex([2, 4, 6, 7, 10, 0, -3]);

// Requisito 4 - Crie a função getLongestWord

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

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
