function getClosingParen(sentence, openingParenIndex) {
  let openNestedParens = 0;
  for (
    let position = openingParenIndex + 1;
    position < sentence.length;
    position++
  ) {
    const char = sentence[position];

    if (char === "(") {
      openNestedParens += 1;
    } else if (char === ")") {
      if (openNestedParens === 0) {
        return position;
      }
      openNestedParens -= 1;
    }
  }

  throw new Error("No closing parenthesis :(");
}

// Tests

let desc = "all openers then closers";
let actual = getClosingParen("((((()))))", 2);
let expected = 7;
assertEqual(actual, expected, desc);

desc = "mixed openers and closers";
actual = getClosingParen("()()((()()))", 5);
expected = 10;
assertEqual(actual, expected, desc);

desc = "no matching closer";
const noCloser = () => getClosingParen("()(()", 2);
assertThrowsError(noCloser, desc);

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
