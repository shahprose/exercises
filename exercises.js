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


// Part 4 Array Methods 10

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