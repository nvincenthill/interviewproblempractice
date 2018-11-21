// Reverse the input array of characters in place
function reverse(arrayOfChars) {
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {
    // Swap characters
    [arrayOfChars[leftIndex], arrayOfChars[rightIndex]] = [
      arrayOfChars[rightIndex],
      arrayOfChars[leftIndex]
    ];

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}

// Tests

// let desc = "empty string";
// let input = "".split("");
// reverse(input);
// let actual = input.join("");
// let expected = "";
// assertEqual(actual, expected, desc);

// desc = "single character string";
// input = "A".split("");
// reverse(input);
// actual = input.join("");
// expected = "A";
// assertEqual(actual, expected, desc);

// desc = "longer string";
// input = "ABCDE".split("");
// reverse(input);
// actual = input.join("");
// expected = "EDCBA";
// assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
