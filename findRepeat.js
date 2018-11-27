function findRepeat(numbers) {
  let repeatedNum = null;
  let uniques = new Set();

  let i = 0;

  while (repeatedNum === null) {
    let size = uniques.size;
    uniques.add(numbers[i]);
    let newSize = uniques.size;
    if (size === newSize) {
      repeatedNum = numbers[i];
    }
    i += 1;
  }

  return repeatedNum;
}

// Tests

let desc = "just the repeated number";
let actual = findRepeat([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = "short array";
actual = findRepeat([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = "medium array";
actual = findRepeat([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = "long array";
actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
