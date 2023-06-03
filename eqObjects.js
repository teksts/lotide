const { object } = require("joi");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion failed: [${actual}] !== [${expected}]`);
  }
};

const assertArraysEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    assertEqual(actual[i], expected[i]);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// // Currently, this function cannot compare objects that contain objects as values.
// const eqObjects = function(obj1, obj2) {
//   // First, check whether obj1 and obj2 have the same number of keys. If they don't, they can't be identical.
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }
//   for (let i in obj1) {
//     // For each key, check whether the value is an array. If it is, we must call eqArray rather than comparing with ===.
//     if (Array.isArray(obj1[i])) {
//       /* Check whether the corresponding value in obj2 is an array.
//       This edge case is necessary to avoid faulty behaviour when the value of one key is an array containing a single string literal consisting of a single character,
//       and the value of the other key is a string literal comprised of that same character. Due to the formulation of eqArray, it will mistakenly return true in this case. */
//       if (!Array.isArray(obj2[i])) {
//         return false;
//       }
//       // Check whether the two array values match
//       if (!eqArrays(obj1[i], obj2[i])) {
//         return false;
//       }
//       // If the value is not an array, compare them as usual and check whether they match.
//     } else if (obj1[i] !== obj2[i]) {
//       return false;
//     }
//   }
//   // If none of the above conditions are met, the objects must be identitcal
//   return true;
// };

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let i in obj1) {
    if (Array.isArray(obj1[i])) {
      if (!Array.isArray(obj2[i])) {
        return false;
      }
      if (!eqArrays(obj1[i], obj2[i])) {
        return false;
      }
      if (typeof obj1[i] === "object") {
        return eqObjects(obj1[i], obj2[i]);
      }
    } else if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false

const shirtWithNestedObjects = { color: "red", size: "medium", manufacturer: {name: 'TAPOUT', locations: ['Vancouver', 'Toronto']} };
const anotherShirtWithNestedObjects = { color: "red", size: "medium", manufacturer: {name: 'Burberry', locations: ['Vancouver', 'Toronto']} };
const shirtWithNestedEmptyObjects = { color: "red", size: "medium", manufacturer: {} };
console.log(eqObjects(shirtWithNestedObjects, shirtWithNestedObjects)); // => true
console.log(eqObjects(shirtWithNestedObjects, anotherShirtWithNestedObjects)); // => false
console.log(eqObjects(shirtWithNestedObjects, shirtWithNestedEmptyObjects)); // => false
