const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion failed: [${actual}] !== [${expected}]`);
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

const assertArraysEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    assertEqual(actual[i], expected[i]);
  }
};

const flatten = function(arr) {
  let output = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let subelement of element) {
        output.push(subelement);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};
