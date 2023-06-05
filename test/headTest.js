// DEPENDENCIES
const assert = require('chai').assert;
const head = require('../head');

// TESTS
describe("#head", () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.notStrictEqual(head([1, 2, 3]), 2);
  });
});
describe("#head", () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});
describe("#head", () => {
  it('returns Hello for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.notStrictEqual(head(["Hello", "Lighthouse", "Labs"]), ["Hello"]);
  });
});
describe("#head", () => {
  it('returns Hello for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
describe("#head", () => {
  it("returns undefined for []", () => {
    assert.notStrictEqual(head([]), null);
  });
});
describe("#head", () => {
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});

// TESTS


// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);
