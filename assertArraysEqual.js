const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑 Assertion failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅ Assertion passed: [${actual}] === [${expected}]`);
  }
};

// Export code
module.exports = assertArraysEqual;