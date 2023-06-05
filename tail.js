const tail = function(arr) {
  return (arr.length > 1) ? arr.slice(1) : [];
};

// Export code
module.exports = tail;