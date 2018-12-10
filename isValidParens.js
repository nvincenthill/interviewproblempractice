function validParenthesesSequence(s) {
  let chars = s.split("");
  let count = 0;
  let i = 0;

  while (i < chars.length) {
    if (chars[i] === "(") {
      count++;
    }

    if (chars[i] === ")") {
      count--;
    }

    if (count < 0) {
      return false;
    }

    i += 1;
  }

  return count === 0;
}
