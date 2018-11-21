// Reverse the input array of characters in place
function reverse(arrayOfChars) {
  let last = arrayOfChars.length - 1;
  for (let i = 0; i < last; i++) {
    [arrayOfChars[i], arrayOfChars[last]] = [
      arrayOfChars[last],
      arrayOfChars[i]
    ];
    last--;
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
