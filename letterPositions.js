const letterPositions = function(str) {
  const positionsFound = {};
  for (let i = 0; i < str.length; i++) {
    if (positionsFound[str[i]] === undefined) {
      positionsFound[str[i]] = [i];
    } else {
      positionsFound[str[i]].push(i);
    }
  }
  return positionsFound;
};

const testString = "quasimodo";
const expectedTestResult = {
  q: [0],
  u: [1],
  a: [2],
  s: [3],
  i: [4],
  m: [5],
  o: [6, 8],
  d: [7]
};

console.log(letterPositions(testString));
console.log(expectedTestResult);

module.exports = letterPositions;
