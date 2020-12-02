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

const oddCouple = (array) => {
  const output = [];
  for (let el of array) {
    if (output.length === 2) break;
    if (el % 2 === 1) output.push(el);
  };
  return output;
}

const myIncludes = (array, searchValue) => {
  for (let elem of array) {
    if (elem === searchValue) return true;
  }
  return false;
}

const myLastIndexOf = (array, searchValue, startIdx = array.length) => {
  let indexOfFoundElement = -1;
  for (let i = startIdx; i < array.length; i++) {
    let currentEl = array[i];
    if (currentEl === searchValue) {
      indexOfFoundElement = i;
    }
  }
  return indexOfFoundElement;
}

myLastIndexOf([0, 10, 20, 10, 0], 10)

const myReverse = (array) => {
  const output = [];
  array.forEach(el => {
    output.unshift(el);
  })
  return output;
}

const myUnshift = (arr, val) => {
  return [val, ...arr];
}

const evenAndOdd = originalArray => {
  return originalArray.reduce((acc, cv) => {
    if (cv % 2 === 0) {
      acc[0].push(cv);
    } else {
      acc[1].push(cv);
    }
    return acc;
  },[[],[]])
}

const arrayFlattener = (arr) => {
  const output = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      output.push(...el);
    } else {
      output.push(el);
    }
  }
  return output;
}

const makeGrid = (numColumns, numRows) => {
  // each row will be numColumns long;
  // the number of times this will be pushed is numRows
  const output = [];
  for (let i = 1; i <= numRows; i++) {
    const row = [];
    for (let i = 1; i <= numColumns; i++) {
      row.push(i);
    }
    output.push(row);
  }
  return output;
}

const removeColumns = (originalGrid, numColumns) => {
  let columnWidth = originalGrid[[0]].length;
  const output = [];
  for (let i = 0; i < originalGrid.length; i++) {
    const newRow = [];
    for (let i = 1; i <= columnWidth - numColumns; i++) {
      newRow.push(i);
    }
    output.push(newRow);
  }
  return output; 
}

const myJoin = (array, separator = ',') => {
  let outputStr = '';
  for (let i = 0; i < array.length; i++) {
    let elem = array[i];
    if (!(elem)) {
      outputStr += separator;
    } else {
      outputStr += elem + separator;
    }
  }
  return outputStr.slice(0, -separator.length);
}

const mySlice2 = (originalArray, startIdx = 0, endIdx = originalArray.length) => {
  const outputArr = [];
  if (startIdx < 0) startIdx = originalArray.length + startIdx;
  if (endIdx < 0) endIdx = originalArray.length + endIdx;
  for (let i = startIdx; i < endIdx; i++) {
    let currentEl = originalArray[i];
    outputArr.push(currentEl);
  }
  return outputArr; 
}

const rotate = (originalArray, rotateNum) => {
  return [...originalArray.slice(-rotateNum), ...originalArray.slice(0, -rotateNum)]
}

// objects

const lastFridayNight = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentObj = arr[i];
    let { amount } = currentObj;
    total += amount;
  };
  return total;
};

const compareObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    let currentVal1 = obj1[key];
    let currentVal2 = obj2[key];
    if (currentVal1 !== currentVal2) return false;
  };

  return true;
}

let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

const leetTranslator = (str) => {
  // create a codex obj with letters as keys and leetchars as values
  const codexObj = {};

  letters.forEach((letter, idx) => {
    codexObj[letter] = leetChars[idx];
  });

  // create an empty string
  let newStr = '';
  // loop over the string and construct a new string based on the letter's value property in the codex
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i].toLowerCase();
    newStr += codexObj[currentLetter];
  }

  // return the leet string
  return newStr;
}

const frequencyAnalysis = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter in obj) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
}

const attendanceCheck = (str) => {
  const presentStudents = [];
  for (let obj of classRoom) {
    for (let key in obj) {
      const studentDaysArr = obj[key];
      for (let day of studentDaysArr) {
        if (day[str]) presentStudents.push(key);
      }
    }
  };
  return presentStudents;
}

let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

attendanceCheck('Monday');

// object methods

const me = {
  name: 'Optimus Prime',
  getGreeting() {
    return `Hi, my name is ${this.name}.`
  }
}

const me2 = {
  name: 'Optimus',
  getGreeting(obj) {
    return `Hi ${obj.name}, my name is ${this.name}.`
  }
}

const callThemAll = (obj, value) => {
  const outputArr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'function') {
      outputArr.push(obj[key](value));
    }
  };
  return outputArr;
}

let addNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};

callThemAll(addNums, 100);

const ticTacToe = {
  makeBoard() {
    const newBoard = [];
    for (let i = 1; i <= 3; i++) {
      let currentRow = [];
      for (let i = 1; i <= 3; i++) {
        currentRow.push(null);
    };
    newBoard.push(currentRow);
    };
    this.board = newBoard;
    return this.board;
    },
  move(character, rowNum, colNum) {
    if (this.board[rowNum][colNum] === null) {
       this.board[rowNum][colNum] = character;
    };
    console.table(this.board);
    return this.board;
    },
  clear() {
    this.makeBoard();
    return this.board;
    }
};

ticTacToe.makeBoard();

// pbv pbr
const veryOdd = (arr) => {
  return arr.filter(el => el % 2 === 1);
}

const veryOddMutant = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
      arr[i] = 'normie';
      count++;
    };
  }
  return count;
}

const cloneMachine = (animal) => {
  const clone = { ...animal };
  clone.name = animal.name + 'Clone';
  if (animal.offspring.length === 0) {
    animal.offspring = [clone.name];
  } else {
    animal.offspring.push(clone.name);
  }
  return clone;
}

let dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}

const newClone = cloneMachine(dolly);

console.log(dolly);
console.log(newClone);

const reverseArray = (array) => {
  let iterationTimes = array.length;
  let indexToSplice = 0;

  while (iterationTimes > 0) {
    let poppedVal = array.pop();
    array.splice(indexToSplice, 0, poppedVal);
    iterationTimes--;
    indexToSplice++;
  }

  return array;
}

const deeperCopy = (myArray) => {
  let outputArr = [];
  for (let i = 0; i < myArray.length; i++) {
    let currentEl = myArray[i];
    if (Array.isArray(currentEl)) {
      outputArr.push([...currentEl]);
    } else {
      outputArr.push(currentEl);
    }
  };
  return outputArr;
};

// higher order functions

const functionLogger = (func, arg) => {
  console.log('Function starting');
  let result = func(arg);
  console.log('Function complete');
  return result;
}

const finderFunction = (arr, callback) => {
  return arr.findIndex(el => callback(el));
}

const myForEach = (arr, callback) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    output.push(callback(elem, i));
  }
  return output;
}

const chainReaction = (startVal, funcArray) => {
  let returnVal = startVal;
  for (let i = 0; i < funcArray.length; i++) {
    let func = funcArray[i];
    returnVal = func(returnVal);
  }
  return returnVal;
}

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

chainReaction(0, [addTen, subtractFive, multiplyFive]); // => 25
chainReaction(0, [subtractFive, multiplyFive, addTen]);

const billerBuilder = (state) => {
  let shippingAndTax = 1;
  if (state === 'NY') {
    shippingAndTax *= 1.03 * 1.04;
  } else if (state === 'NJ') {
    shippingAndTax *= 1.05 * 1.06625;
  } else {
    shippingAndTax = 1;
  }; 
  // return a function that takes the price of an item as a parameter
  return (price) => {
    return (price * shippingAndTax);
  }
}

let newYorkBiller = billerBuilder('NY');
newYorkBiller(100) // => 107.12 (100 * 1.03 * 1.04);

let newJersBiller = billerBuilder('NJ');
newJersBiller(100) // => 111.95625 (100 * 1.05 * 1.06625);

const timesTable = (number) => {
  return (num) => number * num;
}

let ninesTable = timesTable(9);
ninesTable(8)    // => 72

const partial = (callback, argA) => {
  return (argB) => {
    return callback(argA, argB);
  }
}

const callCount = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  }
}

const stringify = (callback) => {
  return () => {
    return String(callback())
  }
}

// recursion

const countToTen = (num) => {
  if (num === 10) {
    console.log(num);
  } else {
    console.log(num);
    countToTen(num + 1);
  }
}

countToTen(1);

const backwardString = (str) => {
  if (str.length === 0) return;
  console.log(str[str.length - 1]);
  str = str.slice(0, -1);
  backwardString(str);
}

backwardString('happy');

const sumNums = (num, total = 0) => {
  if (num === 0) return total;
  total += num;
  return sumNums(num - 1, total);
}

sumNums(3);

countVowels = (str, count = 0) => {
  // create a base case to return the vowel count
  if (str.length === 0) return count;
  // create a string of vowels to check against
  const VOWELS = 'aeiouAEIOU';
  // check if a letter at a specific index is a vowelCount
  if (VOWELS.includes(str[str.length - 1])) count++;
  // slice off the end of string
  str = str.slice(0, -1);
  return countVowels(str, count);
}

countVowels('Four score and seven years'); // => 9

const reverseArray2 = (arr, revArr = []) => {
  // if arr.length is zero, return revArr
  if (arr.length === 0) return revArr;
  // pop off an element from arr and push it to revArr
  revArr.push(arr.pop());
  // return a recursive call to reverseArray
  return reverseArray2(arr, revArr);
}

reverseArray2([1,2,3,4]);

const sumDigits = (num, sum = 0) => {
  if (num < 1) return sum;

  // to grab the rightmost integer, we can use the modulo operator
  let digit = num % 10;
  // add this digit to the sum
  sum += digit;
  // divide the num argument by 10 and parseInt to remove the decimal
  num = Math.trunc(num / 10);

  // recursively call the function, passing in num and sum
  return sumDigits(num, sum);
}

sumDigits(1234)

const isPalindrome = (str) => {

  if (str.length === 1 || str.length === 0) return true;
  
  str = str.toLowerCase();

  if (str[0] !== str[str.length - 1]) return false;

  str = str.slice(1, -1);

  return isPalindrome(str);
}


// recursion ii

const logsArrayElements = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];
    if (Array.isArray(currentItem)) {
      logsArrayElements(currentItem);
    } else {
      console.log(currentItem);
    }
  }
}

const concatEls = (arr, finalString = '') => {
  for (let el of arr) {
    if (Array.isArray(el)) {
      finalString += concatEls(el);
    } else {
      finalString += el;
    }
  }
  return finalString;
}

concatEls(['c',['a', 't']])

// nestedObjects

// write a function sumVals that sums the values in an object

const sumVals = (obj, sum = 0) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += sumVals(obj[key]);
    } else {
      sum += obj[key];
    }
  }
  return sum;
}

sumVals({a: 10, b: 20, c: {d: 40, e: {f: 30}}});

// write a function that accepts an array of numbers and returns the sum of all the numbers in the array, no matter how nested

const arraySum = (arr, sum = 0) => {
  // iterate over the array
    // if the element is an array,
      // sum equals itself + a recusive call to this function
    // else add the element to the sum
  
  for (let el of arr) {
    if (Array.isArray(el)) {
      sum += arraySum(el);
    } else {
      sum += el;
    }
  }

  // return the sum
  return sum;
}

arraySum([1, [2, 3, [4]]]) // => 10

// all systems go

const allSystemsGo = (obj, systemStatus = true) => {

  for (let key in obj) {
    // if the value of a key is an oject, recursively call this function
    console.log(obj[key])
    if (typeof obj[key] === 'object') {
      let subSystemVal = allSystemsGo(obj[key]);
      if (subSystemVal === false) return false;
    } else {
      if (obj[key] === false) return false;
    }
  }

  return true;
}

// the truth counts 
const theTruthCounts = (arr) => {
  let count = 0;

  for (let el of arr) {
    if (Array.isArray(el)) {
      count += theTruthCounts(el);
    } else {
      if (el) count++;
    }
  }
  // return count
  return count;
}

theTruthCounts([0, [true, ['yes']]])


// getLongestName

const getLongestName = (obj) => {
  let longestName = '';
  let subLong = '';
  
  for (let key in obj) {
    if (key.length > longestName.length) {
      longestName = key;
    }; 

    if (typeof obj[key] === 'object') {
      subLong = getLongestName(obj[key]);
    }
  }

  return longestName.length > subLong.length ? longestName : subLong;
}

let family = {
  'Beverly Marquez': {
    'Nina Rhone': {
      'William Rhodes': null,
      'Paul Nell': null,
      'Sir Paddington the Fourth, of the county Wilstonshire': null
    }
  }
};

getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'