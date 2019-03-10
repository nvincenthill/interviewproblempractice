// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase. Do not use native toLowerCase().

const toLowerCase = str => {
  //Calculate Ascii diff from a to A
  const offset = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);

  return str
    .split('')
    .map(char =>
      char >= 'A' && char <= 'Z'
        ? String.fromCharCode(char.charCodeAt(0) + offset)
        : char
    )
    .join('');
};

// Tests

// console.log(toLowerCase('Hello')); // hello
// console.log(toLowerCase('here')); // here
// console.log(toLowerCase('LOVELY')); // lovely
