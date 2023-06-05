const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`PASS ✅ [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`FAIL 🛑 [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

module.exports = assertObjectsEqual;