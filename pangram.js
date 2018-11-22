function pangrams(s) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  if (s.length < 26) {
    return "not pangram";
  }

  for (let i = 0; i < s.length; i++) {
    if (alphabet[alphabet.indexOf(s[i].toLowerCase())]) {
      delete alphabet[alphabet.indexOf(s[i].toLowerCase())];
    }
  }

  for (let j = 0; j < alphabet.length; j++) {
    if (alphabet[j] !== undefined) {
      return "not pangram";
    }
  }

  return "pangram";
}

function pangramsWithRegex(s) {
  let isPangram = /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(
    s
  );

  return isPangram ? "pangram" : "not pangram";
}
