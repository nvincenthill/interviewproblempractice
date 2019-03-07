const convertToTitle = function(n) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let mod,
    string = '';
  while (n > 0) {
    mod = n % 26;
    string = alphabet[mod - 1] + string;
    n = Math.floor((n - 1) / 26);
  }
  return string;
};

// tests
// console.log(convertToTitle(273)); // JM
// console.log(convertToTitle(1)); // A
// console.log(convertToTitle(27)); // AA
