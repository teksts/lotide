const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TESTS
// =====

// Non-recursive
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// Recursive
console.log("Nested test 1:", eqArrays([1, 2, [3]], [1, 2, [3]])); // => true
console.log("Nested test 2:", eqArrays([1, 2, 3], [1, 2, [3]])); // => false
console.log("Nested test 3:", eqArrays([1, [2, 3]], [1, [2, 3]])); // => true
console.log("Nested test 4:", eqArrays([1, 2, [3]], [1, 2, 3])); // => false
console.log("Nested test 5:", eqArrays([1, [[2, 3]]], [1, [[2, 3]]])); // => true
console.log("Nested test 6:", eqArrays([1, [[2, [3]]]], [1, [[2, 3]]])); // => false