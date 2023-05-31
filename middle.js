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

const middle = function (arr) {
  if (arr.length <= 2) {
    return [];
  }
  const middleIndex = arr.length / 2;
  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
  return [arr[Math.floor(middleIndex)]];
};

const smallestArr = [];
const smallArr = [1, 2];
const evenArr = [1, 2, 3, 4];
const oddArr = [1, 2, 3, 4, 5];
console.log(eqArrays(middle(smallestArr), []));
console.log(eqArrays(middle(smallArr), []));
console.log(eqArrays(middle(evenArr), [2, 3]));
console.log(eqArrays(middle(oddArr), [3]));