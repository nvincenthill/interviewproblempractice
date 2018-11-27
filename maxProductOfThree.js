function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error("Less than 3 items!");
  }

  // We're going to start at the 3rd item (at index 2)
  // So pre-populate highests and lowests based on the first 2 items
  // We could also start these as null and check below if they're set
  // but this is arguably cleaner
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

  // Except this one--we pre-populate it for the first *3* items
  // This means in our first pass it'll check against itself, which is fine
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // Walk through items, starting at index 2
  for (let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i];

    // Do we have a new highest product of 3?
    // It's either the current highest
    // or the current times the highest product of two
    // or the current times the lowest product of two
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    // Do we have a new highest product of two?
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    // Do we have a new lowest product of two?
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    // Do we have a new highest?
    highest = Math.max(highest, current);

    // Do we have a new lowest?
    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
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
