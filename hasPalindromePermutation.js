function hasPalindromePermutation(str) {
  if (str === "" || str.length === 1) {
    return true;
  }

  const tally = str.split("").reduce((tally, char) => {
    tally[char] = (tally[char] || 0) + 1;
    return tally;
  }, {});

  let odds = 0;

  for (let letter in tally) {
    if (tally[letter] % 2 !== 0) {
      odds += 1;
    }
  }

  if (odds === 0 || odds === 1) {
    return true;
  } else {
    return false;
  }
}

// Tests

let desc = "permutation with odd number of chars";
assertEqual(hasPalindromePermutation("aabcbcd"), true, desc);

desc = "permutation with even number of chars";
assertEqual(hasPalindromePermutation("aabccbdd"), true, desc);

desc = "no permutation with odd number of chars";
assertEqual(hasPalindromePermutation("aabcd"), false, desc);

desc = "no permutation with even number of chars";
assertEqual(hasPalindromePermutation("aabbcd"), false, desc);

desc = "empty string";
assertEqual(hasPalindromePermutation(""), true, desc);

desc = "one character string ";
assertEqual(hasPalindromePermutation("a"), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
