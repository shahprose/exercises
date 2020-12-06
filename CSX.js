const arrayBuilder = (countObj) => {
	// create an empty array literal;
  let outputArr = [];
  // loop over the input object;
  for (let key in countObj) {
    let count = countObj[key];
    while (count > 0) {
      outputArr.push(key);
      count--;
    }
  };
  // return output array;
  return outputArr;
}

const pluralize = (arrOfStrings) => {
  return arrOfStrings.map(string => string + 's');
};

// const map = (array, callback) => {
//   const outputArr = [];
//   array.forEach(el => outputArr.push(callback(el)));
//   return outputArr;
// };

const forEach = (arr, callback) => {
  for (let el of arr) {
    callback(el);
  }
}

const map = (arr, callback) => {
  const output = [];
  forEach(arr, (el) => output.push(callback(el)));
  return output;
}

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
};

const arrOfNums = [1, 2, 3, 4, 5];
function func1(num) {
  return num % 2 === 0;
}
function func2(num) {
  return num % 2 === 1;
};

const eitherFilter = (arr, callback1, callback2) => {
  // create an empty array literal to store the output;
  const output = [];
  // iterate over the input array
  for (let el of arr) {
    if (callback1(el) || callback2(el)) {
      output.push(el);
    }
  }
    // if the return value of passing in the current element to callback1 or callback2 is truthy, push the element into the output array
  return output;
  // return the array
}

const reduce = (arr, func, initVal) => {
  let startIndex;
  let acc;

  if (initVal) {
    acc = initVal;
    startIndex = 0;
  } else {
    acc = arr[0];
    startIndex = 1;
  };

  for (let i = startIndex; i < arr.length; i++) {
    let currentElement = arr[i];
    acc = func(acc, currentElement);
  };

  return acc;
}

// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0)); // should log 8

const intersection = arrayOfArrays => {
  return arrayOfArrays.reduce((acc, cv) => {
    return acc.filter(el => cv.includes(el));
  })
}

// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

const union = (arrOfArrays) => {
  return arrOfArrays.reduce((acc, cv) => {
    cv.forEach((el) => {
      if (!(acc.includes(el))) acc.push(el);
    });
    return acc;
  }, [])
}

const objOfMatches = (arr1, arr2, callback) => {
  const obj = {};
  arr1.forEach((el, idx) => {
    if (callback(el) === arr2[idx]) {
      obj[el] = arr2[idx];
    }
  });
  return obj;
}

function arrToObj(array, callback) {
  const outputObj = {};

  array.forEach(el => {
    outputObj[el] = callback(el);
  })

  return outputObj;
}

// ADD CODE HERE
const multiMap = (arrValues, arrCallbacks) => {
  const outputObj = {};
  
  arrValues.forEach((el) => {
    const tempArray = [];
    arrCallbacks.forEach((func) => {
      tempArray.push(func(el));
    });
    outputObj[el] = tempArray;
  })

  return outputObj;
}

const majority = (arr, callback) => {
  let trueVals = 0;
  let falseVals = 0;
  
  for (let el of arr) {
    callback(el) ? trueVals++ : falseVals++;
  }
  
  return trueVals > falseVals;
}

const prioritize = (array, callback) => {
  const trueVals = [];
  const falseVals = [];
  array.forEach((el) => {
    callback(el) ? trueVals.push(el) : falseVals.push(el);
  });
  return [...trueVals, ...falseVals];
}