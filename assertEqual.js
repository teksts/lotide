// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion passed: [" + actual + "] === [" + expected + "]");
  } else {
    console.log("🛑 Assertion failed: [" + actual + "] !== [" + expected + "]");
  }
};

// TEST CODE
assertEqual("foo", "foo");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
