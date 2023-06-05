const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TESTS
const smallestArr = [];
const smallArr = [1, 2];
const evenArr = [1, 2, 3, 4];
const oddArr = [1, 2, 3, 4, 5];
assertArraysEqual(middle(smallestArr), []);
assertArraysEqual(middle(smallArr), []);
assertArraysEqual(middle(evenArr), [2, 3]);
assertArraysEqual(middle(oddArr), [3]);