const takeUntil = function(array, callback) {
  const returnArr = [];
  for (let element of array) {
    if (callback(element)) {
      return returnArr;
    }
    returnArr.push(element);
  }
  return returnArr;
};

const testInput1 = [1, 2, 3];
const testFunc1 = x => x === 3;
const testExpected1 = [1, 2];
const testInput2 = [1, 2, 3];
const testFunc2 = x => x === 4;
const testExpected2 = [1, 2, 3];
const testInput3 = [1, 2, 3];
const testFunc3 = x => x > 0;
const testExpected3 = [];

assertArraysEqual(takeUntil(testInput1, testFunc1), testExpected1);
assertArraysEqual(takeUntil(testInput2, testFunc2), testExpected2);
assertArraysEqual(takeUntil(testInput3, testFunc3), testExpected3);

module.exports = takeUntil;
 