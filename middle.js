const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  const middleIndex = arr.length / 2;
  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
  return [arr[Math.floor(middleIndex)]];
};

// Export code
module.exports = middle;