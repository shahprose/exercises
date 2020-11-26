// part 3 - objects 4

const removeNumbersLargerThan = (num, obj) => {
  // loop over the obj's keys
  for (let key in obj) {
    // if the value at the current key is greater than num, delete the property
    if (obj[key] > num) delete obj[key];
  }
}

const removeNumbersLessThan = (num, obj) => {
  for (let key in obj) {
    if (obj[key] < num) delete obj[key];
  }
}

const removeStringValuesLongerThan = (num, obj) => {
  for (let key in obj) {
    if (obj[key].length > num) delete obj[key];
  }
}

// part 3 - objects 5

const removeEvenValues = (obj) => {
  for (let key in obj) {
    if (obj[key] % 2 === 0) delete obj[key];
  }
}

const countNumberOfKeys = (obj) => {
  return Object.keys(obj).length;
}


// part 3 - array string methods 2

const convertDoubleSpaceToSingle = (str) => {
  // split the str to an array to leverage array methods, use two spaces as the splitter
  return str.split('  ')
    // use join to recombine the array elements into a string, use one space as the joiner
    .join(' ');
}


// part 3 - array methods 7

const joinThreeArrays = (...arrays) => {
  // we have an indeterminate amount of arrays as arguments that we need to combine into one array
  // we can use the Array.flat() method
  return arrays.flat();
}

const addToFrontOfNew = (arr, elem) => {
  return [elem, ...arr];
}

const addToBackNew = (arr, elem) => {
  return [...arr, elem];
}

const getAllElementsButNth = (arr, index) => {
  return arr.filter((elem, idx) => {
    if (idx !== index) return elem;
  })
}

// iteration 1 

const getIndexOf = (char, str) => {
  // loop over the str, if the current letter is equal to the input variable, return the index
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    if (currentLetter === char) return i;
  };
  return -1;
}

function findMinLengthOfThreeWords(...words) {
  // map the input arguments into an array of lengths
  const wordLengths = [...words].map(word => word.length);
  // use the Math.min method to return the smallest number in that array
  return Math.min(...wordLengths);
}

const findMaxLengthOfThreeWords = (...words) => {
  const wordLengths = [...words].map(word => word.length);
  return Math.max(...wordLengths);
}

// conditionals 9
const getLongestOfThreeWords = (...words) => {
  // turn the input arguments into an array
  const wordsArray = [...words];
  //  create a lengths array from the wordsArray
  const wordsLengths = wordsArray.map(word => word.length);
  const maxLength = Math.max(...wordsLengths);
  // use find on the wordsArray to find the first instance where the length equals the maxLength
  return wordsArray.find(word => word.length === maxLength);
}

console.log(getLongestOfThreeWords('these', 'three', 'words'));

// find shortest word
const findShortestOfThreeWords = (...words) => {
  const wordsArray = [...words];
  return wordsArray.reduce((acc, cv) => {
    if (cv.length < acc.length) {
      acc = cv;
    }
    return acc;
  })
}



// advanced 3 

const select = (arr, obj) => {
  // create a new object literal
  const newObj = {};

  // iterate over the keys of the original object
    // if the key is in the input array, 
    // create a key-value pair in the newObj
  for (let key in obj) {
    if (arr.includes(key)) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}


// Part 4 - Array Methods 9

const filterOddLengthWords = (arr) => {
  return arr.filter(word => word.length % 2 === 1);
}

const filterEvenLengthWords = (arr) => arr.filter(word => word.length % 2 === 0)

// coding is relaxing

const getLengthOfLongestElement = (arr) => {
  if (arr.length === 0) return 0;
  const lengths = arr.map(word => word.length);
  return Math.max(...lengths)
};


// Part 4

const squareElements = (arr) => {
  return arr.map(el => el ** 2);
}

const filterOddElements = (arr) => arr.filter(el => el % 2 === 1);

const computeProductOfAllElements = (arr) => {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, cv) => {
    return acc *= cv; 
  }, 1)
}

const filterEvenElements = (arr) => arr.filter(num => num % 2 === 0);

const getLengthOfShortestElement = (arr) => {
  if (arr.length === 0) return 0;
  const arrLengths = arr.map(el => el.length);
  return Math.min(...arrLengths);
}

const getLongestElement = (arr) => {
  return arr.reduce((acc, cv) => {
    if (cv.length > acc.length) {
      acc = cv;
    }
    return acc;
  }, '')
}

const findSmallestElement = (arr) => {
  return arr.length === 0 ? 0 : Math.min(...arr);
}

const findShortestElement = (arr) => {
  if (arr.length === 0) return '';
  const lengths = arr.map(el => el.length);
  let min = Math.min(...lengths);
  return arr.find(el => el.length === min);
}

const getLargestElement = (arr) => {
  return arr.length === 0 ? 0 : Math.max(...arr);
}

const computeSumOfAllElements = (arr) => {
  return arr.reduce((acc, cv) => {
    return acc += cv;
  }, 0)
}

// Objects 7

const getElementsThatEqual10AtProperty = (obj, key) => {
  if (Array.isArray(obj[key]) === false) return [];
  return obj[key].filter(el => el === 10);
}

const getElementsLessThan100AtProperty = (obj, key) => {
  if (Array.isArray(obj[key]) === false) return [];
  return obj[key].filter(el => el < 100);
}

const countAllCharacters = (str) => {
  // create a cache object to store key-value pairs
  const obj = {};

  // iterate over the str
  for (let i = 0; i < str.length; i+=1) {
    let currentLetter = str[i];
    if (currentLetter in obj) {
      obj[currentLetter]++;
    } else {
      obj[currentLetter] = 1;
    }
  }
    // if a letter is in the cache object, increment it
    // otherwise assign it a value of 1
  return obj;
}

const getElementsGreaterThan10AtProperty = (obj, key) => {
  if (!(Array.isArray(obj[key]))) return [];
  return obj[key].filter(el => el > 10);
}

const getFirstElementOfProperty = (obj, key) => {
  if (!(Array.isArray(obj[key]))) return undefined;
  return obj[key] ? obj[key][0] : undefined;
}

const getNthElementOfProperty = (obj, key, index) => {
  if (!(Array.isArray(obj[key]))) return undefined;
  return obj[key] ? obj[key][index] : undefined;
}

const getLastElementOfProperty = (obj, key) => {
  if (!(Array.isArray(obj[key]))) return undefined;
  return obj[key] ? obj[key][obj[key].length - 1] : undefined;
}

const keep = (arr, keeper) => {
  return arr.filter(el => el === keeper);
}

const computerAverageOfNumbers = (nums) => {
  return nums.length === 0 ? 0 : 
    (nums.reduce((acc, cv) => {
      return acc += cv;
    }, 0))/nums.length;
}

function getOddLengthWordsAtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
      return obj[key].filter(el => el.length % 2 === 1);
  };
  return [];
}

const getAverageOfElementsAtProperty = (obj, key) => {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    // use reduce to calculate the sum and then divide by the length of the array to get the average
    let arr = obj[key];
    return arr.reduce((acc, cv) => {
      return acc += cv;
    }, 0)/arr.length
  }
  // if the value at the object's key is not an array, return 0
  return 0;
}

const getEvenLengthWordsAtProperty = (obj, key) => {
  if (!(Array.isArray(obj[key])) || !(obj[key])) return [];
  return obj[key].filter(el => el.length % 2 === 0)
}

const getSquaredElementsAtProperty = (obj, key) => {
  if (!(Array.isArray(obj[key])) || !(obj[key])) return [];
  return obj[key].map(el => el ** 2);
}

const getOddElementsAtProperty = (obj, key) => {
  if (!(Array.isArray(obj[key])) || !(obj[key])) return [];
  return obj[key].filter(el => el % 2 === 1)
}

const getSmallestElementAtProperty = (obj, key) => {
  if (obj[key] === undefined || (!(Array.isArray(obj[key])))) return undefined
  if (obj[key].length === 0) return undefined;
  return Math.min(...[...obj[key]]);
}

const getLargestElementAtProperty = (obj, key) => {
  if (obj[key] === undefined || (!(Array.isArray(obj[key])))) return undefined
  if (obj[key].length === 0) return undefined;
  return Math.max(...[...obj[key]]);
}

const getAllButLastElementOfProperty = (obj, key) => {
  if (obj[key] === undefined || (!(Array.isArray(obj[key])))) return [];
  if (obj[key].length === 0) return [];
  return obj[key].slice(0, -1);
}

const getElementOfArrayProperty = (obj, key, index) => {
  if (obj[key] === undefined || (!(Array.isArray(obj[key])))) return undefined
  if (obj[key].length === 0) return undefined;
  return obj[key][index];
}

// Math 5

const calculateBillTotal = num => {
  return num + num * (.15 + .095);
}

// Iteration 2 - recursive

const getStringLength = (str, count = 0) => {
  if (str[0] === undefined) return count;
  count++;
  let newStr = str.slice(0, -1);
  return getStringLength(newStr, count);
}

console.log(getStringLength('hello'));


// Array Methods 14;

const joinArrayOfArrays = (...arrays) => {
  return arrays.flat(2);
}

// objects 12

const getProductOfAllElementsAtProperty = (obj, key) => {
  if (!(Array.isArray(obj[key])) || obj[key] === undefined) return 0;
  if (obj[key].length === 0) return 0;
  return obj[key].reduce((acc, cv) => {
    acc = acc * cv;
    return acc;
  }, 1)
}

// advanced 5

const sumDigits = (num) => {
  // turn the absolute value of the num into a string
  let strNum = String(Math.abs(num))
  // split the string into an array
  let strNumArray = strNum.split('');
  let sum = strNumArray.reduce((acc, cv) => {
    acc += Number(cv);
    return acc;
  }, 0)
  // if the number was negative, add 2 times the negative number to the sum
  return num < 0 ? sum + 2 * -strNumArray[0] : sum;
}

console.log(sumDigits(-316));


// objects 13

const getSumOfAllElementsAtProperty = (obj, key) => {
  if (!(Array.isArray(obj[key])) || obj[key] === undefined) {
    return 0;
  }

  return obj[key].reduce((acc, cv) => acc += cv, 0);
}


// findShortestWordAmongMixedElements 

const findShortestWordAmongMixedElements = (arr) => {
  if (arr.length === 0) return '';
  let filterWordsOutOfArray = arr.filter(el => typeof el === 'string');
  if (filterWordsOutOfArray.length === 0) return '';
  return filterWordsOutOfArray.reduce((acc, cv) => {
    if (cv.length < acc.length) {
      acc = cv;
    }
    return acc;
  })
}

const findSmallestNumberAmongMixedElements = (arr) => {
  if (arr.length === 0) return 0;
  let filterNumbers = arr.filter(el => typeof el === 'number');
  if (filterNumbers.length === 0) return 0;
  return filterNumbers.reduce((acc, cv) => {
    if (cv < acc) {
      acc = cv;
    }
    return acc;
  })
}

const findLongestWordOfMixedElements = (arr) => {
  if (arr.length === 0) return '';
  let filterWordsOutOfArray = arr.filter(el => typeof el === 'string');
  if (filterWordsOutOfArray.length === 0) return '';
  return filterWordsOutOfArray.reduce((acc, cv) => {
    if (cv.length > acc.length) {
      acc = cv;
    }
    return acc;
  })
}

const getLargestNumberAmongMixedElements = (arr) => {
  if (arr.length === 0) return 0;
  let filterNumbers = arr.filter(el => typeof el === 'number');
  if (filterNumbers.length === 0) return 0;
  return filterNumbers.reduce((acc, cv) => {
    if (cv > acc) {
      acc = cv;
    }
    return acc;
  })
}