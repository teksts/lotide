# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published as a solo project by me, as part of curriculum at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @teksts/lotide`

**Require it:**

`const _ = require('@teksts/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Takes in two arrays, and prints to console asserting the identity relationship between the two: PASS if the match, FAIL if they do not. Can accomodate arbitrarily nested arrays of arrays, but currently not arrays of objects.
* `assertEqual(item1, item2)`: Takes in two non-Object items, and prints to console asserting the identity relationship between the two: PASS if the match, FAIL if they do not.
* `assertObjectsEqua(object1, object2)l`: Takes in two objects, and prints to console asserting the identity relationship between the two: PASS if the match, FAIL if they do not. Can accomodate arbitrarily nested objects of objects.
* `countLetters(string)`: Takes in a string, returns an integer representing the number of characters in that string. Does not trim white space.
* `countOnly(array, object)`: Takes in an array of strings and an object specifying strings to be counted, and returns an object recording the number of occorunces of each such string.
* `eqArrays(array1, array2)`: Takes in two arrays, and returns true if the arrays match and false otherwise. Can handle arbritrarily nested arrays of arrays, but not arrays of objects.
* `eqObjects(object1, object2)`: Takes in two objects, and returns true if the objects match and false otherwise. Can handle arbritrarily nested objects of objects.
* `findKey(object, callback)`: Takes in an object and a callback function. Returns the first key that satisfied the callback function, and undefined otherwise.
* `findKeyByValue(object, value)`: Takes in an object and a value. Returns the first key with a value that matches the input value, and undefined otherwise
* `flatten(array)`: Takes in a two-dimensional array and returns a corresponding one dimensional array. Does not modify the input array. Currently can only handle one level of nesting (i.e. not 3+ dimensional arrays).
* `head(array)`: Takes in an array and returns the first element. Does not modify the input array.
* `letterPositions(string)`: Takes in a string and returns a dictionary of each character and the indeces of the input string at which that character appears.
* `map(array, callback)`: Takes in an array and a callback function, returns a new array for which for each element `x` in the input array at index `i`, `callbackFunc(x)` is found at index `i` of the output array. Does not modify the original array.
* `middle(array)`: Takes in an array and returns the middle element if the length of the array is odd, or an array of the middle two elements if the length is even. Does not modify the original array.
* `tail(array)`: Takes in an array and returns an array containing all elements of the input but the first. Does not modify the original array.
* `takeUntil(array, callback)`: Takes in an array and a callback function, and returns an array containing all elements encountered in the original array before the callback function returns true. Does not modify the original array.
* `without(array1, array2)`: Takes in two arrays, and returns an array containing every element of the first array that did not match an element of the second array. Does not modify the original array.