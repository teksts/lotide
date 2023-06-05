const countOnly = function(arr, obj) {
  const elementCount = {};
  for (let i of arr) {
    if (obj[i]) {
      if (!elementCount[i]) {
        elementCount[i] = 1;
      } else {
        elementCount[i] ++;
      }
    }
  }
  return elementCount;
};

const testArray = ['a', 'e', 'i', 'o', 'u', 'y', 'x', 'e', 'm'];
const testSelection = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
  y: false,
  q: true
};

console.log(countOnly(testArray, testSelection), '===', {
  a: 1,
  e: 2,
  i: 1,
  o: 1,
  u: 1
});

module.exports = countOnly;