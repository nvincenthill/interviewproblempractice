// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false

const wordPattern = function(pattern, str) {
  let split = str.split(' ');
  if (pattern.length !== split.length) {
    return false;
  }
  let map = {};
  for (let i = 0; i < pattern.length; i += 1) {
    if (map[pattern[i]] || map['str_' + split[i]]) {
      if (map[pattern[i]] !== split[i]) return false;
      if (map['str_' + split[i]] !== pattern[i]) return false;
    }
    map[pattern[i]] = split[i];
    map['str_' + split[i]] = pattern[i];
  }
  return true;
};

// tests
let pattern = 'abba';
let string = 'dog dog dog dog';
console.log(
  wordPattern(pattern, string) === false ? 'Test passed!' : 'Test Failed'
);

pattern = 'abba';
string = 'dog cat cat dog';
console.log(
  wordPattern(pattern, string) === true ? 'Test passed!' : 'Test Failed'
);
