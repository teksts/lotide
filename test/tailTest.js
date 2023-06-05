// DEPENDENCIES
const assert = require('chai').assert;
const tail = require('../tail');

// TEST CONSTANTS
const emptyArray = [];
const lengthOneArray = ["foo"];
const longArray = ["foo", "bar", "whiz", "bang"];

// TESTS
describe("#tail", () => {
  it(`returns [] for ${emptyArray}`, () => {
    assert.notDeepEqual(tail(emptyArray), ["foo"]);
  });
});

describe("#tail", () => {
  it(`returns [] for ${emptyArray}`, () => {
    assert.deepEqual(tail(emptyArray), []);
  });
});

describe("#tail", () => {
  it(`returns [] for ${lengthOneArray}`, () => {
    assert.notDeepEqual(tail(lengthOneArray), ["foo"]);
  });
});

describe("#tail", () => {
  it(`returns [] for ${lengthOneArray}`, () => {
    assert.deepEqual(tail(lengthOneArray), []);
  });
});

describe("#tail", () => {
  it(`returns [] for ${emptyArray}`, () => {
    assert.notDeepEqual(tail(longArray), ["foo", "bar", "whiz", "bang"]);
  });
});

describe("#tail", () => {
  it(`returns ["bar", "whiz", "bang"] for ${longArray}`, () => {
    assert.deepEqual(tail(longArray), ["bar", "whiz", "bang"]);
  });
});