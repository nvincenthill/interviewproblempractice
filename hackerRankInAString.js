function hackerrankInString(s) {
  let target = ["h", "a", "c", "k", "e", "r", "r", "a", "n", "k"];
  let counter = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] === target[counter]) {
      counter += 1;
    }
    i += 1;
  }

  return counter === target.length ? "YES" : "NO";
}
