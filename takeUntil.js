const takeUntil = function(array, callback) {
  const returnArr = [];
  for (let element of array) {
    if (callback(element)) {
      return returnArr;
    }
    returnArr.push(element);
  }
  return returnArr;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion failed: [${actual}] !== [${expected}]`);
  }
};

const assertArraysEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (!eqArrays(actual, expected)) {
      console.log(`🛑 Assertion failed: [${actual}] !== [${expected}]`);
      break;
    }
  }
  console.log(`✅ Assertion passed: [${actual}] === [${expected}]`);
};

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const testInput1 = [1, 2, 3];
const testFunc1 = x => x === 3;
const testExpected1 = [1, 2];
const testInput2 = [1, 2, 3];
const testFunc2 = x => x === 4;
const testExpected2 = [1, 2, 3];
const testInput3 = [1, 2, 3];
const testFunc3 = x => x > 0;
const testExpected3 = [];

assertArraysEqual(takeUntil(testInput1, testFunc1), testExpected1);
assertArraysEqual(takeUntil(testInput2, testFunc2), testExpected2);
assertArraysEqual(takeUntil(testInput3, testFunc3), testExpected3);
 