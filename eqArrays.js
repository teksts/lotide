const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log("Nested test 1:", eqArrays([1, 2, [3]], [1, 2, [3]])); // => true
console.log("Nested test 2:", eqArrays([1, 2, 3], [1, 2, [3]])); // => false
console.log("Nested test 3:", eqArrays([1, [2, 3]], [1, [2, 3]])); // => true
console.log("Nested test 4:", eqArrays([1, 2, [3]], [1, 2, 3])); // => false
console.log("Nested test 5:", eqArrays([1, [[2, 3]]], [1, [[2, 3]]])); // => true
console.log("Nested test 6:", eqArrays([1, [[2, [3]]]], [1, [[2, 3]]])); // => false