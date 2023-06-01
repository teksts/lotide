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

const findKeyByValue = function(obj, callback) {
  for (let i in obj) {
    if (callback(obj[i])) {
      return i;
    }
  }
};

const testObj = {
  whiz: "bang",
  snap: ["crackle", "pop"],
  foo: "bar"
};
const testFunc1 = x => x === "bar";
const testFunc2 = x => x.length > 3;
const testFunc3 = x => Array.isArray(x);
const testFunc4 = x => x;
const testFunc5 = x => x === "whiz";

assertEqual(findKeyByValue(testObj, testFunc1), "foo");
assertEqual(findKeyByValue(testObj, testFunc2), "whiz");
assertEqual(findKeyByValue(testObj, testFunc3), "snap");
assertEqual(findKeyByValue(testObj, testFunc4), "whiz");
assertEqual(findKeyByValue(testObj, testFunc5), undefined);

