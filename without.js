const without = function(source, itemsToRemove) {
  let output = [];
  for (let element of source) {
    let removable;
    for (let item of itemsToRemove) {
      if (element === item) {
        removable = true;
        break;
      }
    }
    if (!removable) {
      output.push(element);
    }
  }
  console.log(output);
  return output;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;