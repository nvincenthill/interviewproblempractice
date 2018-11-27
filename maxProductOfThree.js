function highestProductOf3(arr) {
  if (arr.length < 3) {
    throw "Need at least three numbers";
  }
  let max = null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i !== j && j !== k && i !== k) {
          if (max === null || max < arr[i] * arr[k] * arr[j]) {
            max = arr[i] * arr[k] * arr[j];
          }
        }
      }
    }
  }
  return max;
}

// Tests

let desc = "short array";
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = "longer array";
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = "array has one negative";
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = "array has two negatives";
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = "array is all negatives";
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = "error with empty array";
const emptyArray = () => highestProductOf3([]);
assertThrowsError(emptyArray, desc);

desc = "error with one number";
const oneNumber = () => highestProductOf3([1]);
assertThrowsError(emptyArray, desc);

desc = "error with two numbers";
const twoNumber = () => highestProductOf3([1, 1]);
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
