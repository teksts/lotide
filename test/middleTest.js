// DEPENDENCIES
const assert = require('chai').assert;
const middle = require('../middle');

// TEST CONSTANTS
const smallestArr = [];
const smallArr = [1, 2];
const evenArr = [1, 2, 3, 4];
const oddArr = [1, 2, 3, 4, 5];

// TESTS
describe("#middle", () => {
  it(`returns [] for ${smallestArr}`, () => {
    assert.notDeepEqual(middle(smallestArr), [1]);
  });
});

describe("#middle", () => {
  it(`returns [] for ${smallestArr}`, () => {
    assert.deepEqual(middle(smallestArr), []);
  });
});

describe("#middle", () => {
  it(`returns [] for ${smallArr}`, () => {
    assert.notDeepEqual(middle(smallArr), [1]);
  });
});

describe("#middle", () => {
  it(`returns [] for ${smallArr}`, () => {
    assert.notDeepEqual(middle(smallArr), [2]);
  });
});

describe("#middle", () => {
  it(`returns [] for ${smallArr}`, () => {
    assert.deepEqual(middle(smallArr), []);
  });
});

describe("#middle", () => {
  it(`returns [2, 3] for ${evenArr}`, () => {
    assert.notDeepEqual(middle(evenArr), [2]);
  });
});

describe("#middle", () => {
  it(`returns [2, 3] for ${evenArr}`, () => {
    assert.deepEqual(middle(evenArr), [2, 3]);
  });
});

describe("#middle", () => {
  it(`returns [3] for ${oddArr}`, () => {
    assert.notDeepEqual(middle(oddArr), [2, 3]);
  });
});

describe("#middle", () => {
  it(`returns [3] for ${oddArr}`, () => {
    assert.deepEqual(middle(oddArr), [3]);
  });
});
