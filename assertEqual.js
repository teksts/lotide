// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (isNaN(actual)) {
    if (isNaN(expected)) {
      console.log(`✅ Assertion passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑 Assertion failed: [${actual}] !== [${expected}]`);
    }
  }
  if (actual === expected) {
    console.log(`✅ Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion failed: [${actual}] !== [${expected}]`);
  }
};

// Export code
module.exports = assertEqual;
