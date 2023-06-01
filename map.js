const map = function(arr, func) {
  const returnArr = [];
  for (let element of arr) {
    returnArr.push(func(element));
  }
  return returnArr;
};










const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion failed: [${actual}] !== [${expected}]`);
  }
};

const assertArraysEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    assertEqual(actual[i], expected[i]);
  }
};

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const testArr = [1, 2, 3];
const testFunc1 = x => x * x;
const testFunc2 = x => x = 1;

assertArraysEqual(map(testArr, testFunc1), [1, 4, 9]);
console.log((map(testArr, x => {
  if (x === 1) return true;
})));
assertArraysEqual(map(testArr, testFunc2), [1, 1, 1]);
