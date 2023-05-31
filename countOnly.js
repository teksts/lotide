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

const countOnly = function(arr, obj) {
  const elementCount = {};
  for (let i of arr) {
    if (obj[i]) {
      if (!elementCount[i]) {
        elementCount[i] = 1;
      } else {
        elementCount[i] ++;
      }
    }
  }
  return elementCount;
};

const testArray = ['a', 'e', 'i', 'o', 'u', 'y', 'x', 'e', 'm'];
const testSelection = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
  y: false,
  q: true
};

console.log(countOnly(testArray, testSelection), '===', {
  a: 1,
  e: 2,
  i: 1,
  o: 1,
  u: 1
});