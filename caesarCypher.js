function caesarCipher(s, k) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let cyphered = "";

  for (let i = 0; i < s.length; i++) {
    let isUpperCase = s[i].toUpperCase() === s[i];
    if (alphabet.includes(s[i].toLowerCase())) {
      let originalIndex = alphabet.indexOf(s[i].toLowerCase());
      let cypheredIndex = (originalIndex + k) % alphabet.length;
      cyphered += isUpperCase
        ? alphabet[cypheredIndex].toUpperCase()
        : alphabet[cypheredIndex];
    } else {
      cyphered += s[i];
    }
  }

  return cyphered;
}

console.log(caesarCipher("Hello World!", 2));
