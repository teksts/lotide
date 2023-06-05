const { findKey } = require(".");

const findKeys = function(obj, callback) {
  for (let i in obj) {
    if (callback(obj[i])) {
      return i;
    }
  }
};

const testObj = {
  whiz: "bang",
  snap: ["crackle", "pop"],
  foo: "bar"
};

const testFunc1 = x => x === "bar";
const testFunc2 = x => x.length > 3;
const testFunc3 = x => Array.isArray(x);
const testFunc4 = x => x;
const testFunc5 = x => x === "whiz";

module.exports = findKeys;