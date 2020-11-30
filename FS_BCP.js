// loops

const greeting = (name) => {
  return name ? `Hello ${name}!` : `Hello!`;
}

const doYouPlayTheTheremin = (str) => {
  return str[0].toLowerCase() === 's'
}

const lastCharacter = (str1, str2) => {
  return str1.slice(-1) === str2.slice(-1);
}

const maxOfThree = (...numbers) => {
  return Math.max(...numbers);
}

const everyWhichWay = (num1, num2, num3) => {
  return num1 + num2 === num3 ? 'sum' :
  num1 - num2 === num3 ? 'difference' :
  num1 * num2 === num3 ? 'product' :
  num1 / num2 === num3 ? 'fraction' :
  null
}

const onlyOdds = (num) => {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) total += i;
  }
  return total;
}

const crazyCaps = (str) => {
  return str.split('')
  .map((letter, idx) => {
    return idx % 2 === 1 ? letter.toUpperCase() : letter;
  })
  .join('');
}

const bacteriaTime = (currentNum, targetNum) => {
  if (targetNum < currentNum) return 'targetNum must be larger than currentNum';

  let numMinutes = 0;

  while (targetNum > currentNum) {
    currentNum *= 2;
    numMinutes += 20;
  }

  return numMinutes;
}

const exponentiate = (base, power) => {
  // return base ** power;
  if (power === 0) return 1;
  let total = 1;
  while (power > 0) {
    total *= base;
    power--;
  };
  return total;
}

const mySlice = (originalString, startIdx = 0, endIdx = originalString.length) => {
  let outputStr = '';
  for (let i = startIdx; i < endIdx; i++) {
    let currentLetter = originalString[i];
    outputStr += currentLetter;
  };
  return outputStr;
}

const myIndexOf = (source, searchValue, startIdx = 0) => {
  let searchLength = searchValue.length;
  for (let i = startIdx; i < source.length; i++) {
    let piece = source.slice(i, i + searchLength);
    console.log(piece);
    if (piece === searchValue) return i;
  };
  return -1;
}

const mostVowels = (str) => {
  // create a string of vowels to check against
  let vowels = 'AEIOUaeiou';

  // split the str into an array
  const wordArr = str.split('.')[0].split(' ');

  // create a function to count vowels in a word
  const vowelCount = (word) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (vowels.includes(letter)) count++;
    }
    return count;
  }
  
  // use reduce to find the word with the most vowels
  return wordArr.reduce((acc, cv) => {
    if (vowelCount(cv) > vowelCount(acc)) {
      acc = cv;
    };
    return acc;
  }, '')
}

// arrays I

