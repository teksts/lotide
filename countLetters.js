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

const countLetters = function(str) {
  const countedCharacters = {};
  for (let i of str) {
    if (!countedCharacters[i]) {
      countedCharacters[i] = 1;
    } else {
      countedCharacters[i]++;
    }
  }
  return countedCharacters;
};

const testString = "quasimodo";
const expectedTestResult = {
  q: 1,
  u: 1,
  a: 1,
  s: 1,
  i: 1,
  m: 1,
  o: 2,
  d: 1
};

console.log(countLetters(testString));
console.log(expectedTestResult);

module.exports = countLetters;