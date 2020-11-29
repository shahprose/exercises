// convert celsius to fahrenheit
const convertToF = (celsius) => (celsius * 9)/5 + 32;

// reverse a string
const reverseString = (str) => str.split('').reverse().join('');

// factorialize a number
const factorialize = (num, total) => {
  return num === 0 ? 1 : num * factorialize(num - 1);
}

// find the longest word's length in a string
const findLongestWordLength = (str) => {
  let lengths = str.split(' ').map(word => word.length);
  return Math.max(...lengths);
}

// Return Largest Numbers in Arrays
const largestOfFour = arr => {
  return arr.map(subArr => [Math.max(...subArr)]).flat();
}

// confirm the ending
const confirmEnding = (str, target) => {
  let lengthToSlice = target.length;
  return str.slice(-lengthToSlice) === target;
}

// repeat a string n num of times
const repeatStringNumTimes = (str, num) => {
  let outputStr = '';
  while (num > 0) {
    outputStr += str;
    num--;
  }
  return outputStr;
}

// truncate a string
const truncateString = (str, num) => {
  return str.length > num ? `${str.slice(0, num)}...` : str;
}

// finders keepers
const findElement = (arr, func) => {
  return arr.find(func);
}

// check if a boolean
const booWho = bool => typeof bool === 'boolean' 

// title case a sentence
const titleCase = (str) => str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' ');

// slice and splice 