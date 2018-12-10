function alphabeticShift(inputString) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";
  for (let i = 0; i < inputString.length; i++) {
    let index = alphabet.indexOf(inputString[i]) + 1;
    let replacement = alphabet[index] ? alphabet[index] : "a";
    newString += replacement;
  }
  return newString;
}
