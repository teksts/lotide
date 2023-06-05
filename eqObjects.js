const { object } = require("joi");
const eqArrays = require('./eqArrays');

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
    } else if (typeof obj1[i] === "object") { // This should be checked later to make sure obj2 doesn't have to be type-checked as well
      if (!eqObjects(obj1[i], obj2[i])) {
        return false;
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

const shirtWithNestedObjects = { color: "red", size: "medium", manufacturer: {name: 'TAPOUT', locations: ['Vancouver', 'Toronto']}, price: 100 };
const shirtWithNestedObjectsDiffPrice = { color: "red", size: "medium", manufacturer: {name: 'TAPOUT', locations: ['Vancouver', 'Toronto']}, price: 80 };
const anotherShirtWithNestedObjects = { color: "red", size: "medium", manufacturer: {name: 'Burberry', locations: ['Vancouver', 'Toronto']}, price: 1000 };
const shirtWithNestedEmptyObjects = { color: "red", size: "medium", manufacturer: {} };
const extremelyNestedShirt = { color: "red", size: "medium", foo: { bar: { whiz: { bang: "hello"} } } };
const otherExtremelyNestedShirt = { color: "red", size: "medium", foo: { bar: { whiz: { bang: "goodbye"} } } };
console.log(eqObjects(shirtWithNestedObjects, shirtWithNestedObjectsDiffPrice)); // => false
console.log(eqObjects(shirtWithNestedObjects, anotherShirtWithNestedObjects)); // => false
console.log(eqObjects(shirtWithNestedObjects, shirtWithNestedEmptyObjects)); // => false
console.log(eqObjects(extremelyNestedShirt, extremelyNestedShirt)); // => true
console.log(eqObjects(extremelyNestedShirt, otherExtremelyNestedShirt)); // => false

module.exports = eqObjects;
