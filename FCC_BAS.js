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
const frankenSplice = (arr1, arr2, n) => {
  return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n))
}

// remove all falsy values from an array
const bouncer = (arr) => arr.filter(Boolean);

// where do I belong
const getIndexToIns = (arr, num) => {
  arr.sort((a, b) => a - b);

  if (arr.length === 0 || num < arr[0]) return 0;
  if (num > arr[arr.length - 1]) return arr.length;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum >= num) return i;
  }
};

// mutations - return true if the string in the first element of the array contains all of the letters of the string in the second element of the array
const mutation = arr => {
  let lowerCaseAll = arr.map(word => word.toLowerCase());
  // find all the unique letters in the second string
  let uniqueLetters = [...new Set(lowerCaseAll[1])];
  // loop over this and see if the first string includes the letters
  for (let letter of uniqueLetters) {
    if (!(lowerCaseAll[0].includes(letter))) return false;
  }
  return true;
}

console.log(mutation(['hello', 'HELLO']));

// chunky monkey - write a function that splits an array into groups the length of size and returns them as a two dimensional array
const chunkArrayInGroups = (arr, size) => {
  // create an output array literal
  const outputArr = [];
  // iterate over the input array, increment by size
  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    outputArr.push(chunk);
  }
    // at each iteration, create a slice of the input array
    // push that slice into the output array
  // return the output array
  return outputArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));