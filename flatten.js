const flatten = function(arr) {
  let output = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let subelement of element) {
        output.push(subelement);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = flatten;
