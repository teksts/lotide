const assertArraysEqual = require('../assertArraysEqual');

// TESTS
// =====

// Non-recursive
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

// Recursive
assertArraysEqual([1, 2, [3]], [1, 2, [3]]); // => true
assertArraysEqual([1, 2, 3], [1, 2, [3]]); // => false
assertArraysEqual([1, [2, 3]], [1, [2, 3]]); // => true
assertArraysEqual([1, 2, [3]], [1, 2, 3]); // => false
assertArraysEqual([1, [[2, 3]]], [1, [[2, 3]]]); // => true
assertArraysEqual([1, [[2, [3]]]], [1, [[2, 3]]]); // => false