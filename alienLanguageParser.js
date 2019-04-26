// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

var isAlienSorted = function(words, order) {
  for (let i = 0; i < words.length - 1; i += 1) {
    if (!inLexOrder(words[i], words[i + 1], order)) {
      return false;
    }
  }
  return true;
};

var inLexOrder = function(word1, word2, order) {
  let maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i += 1) {
    if (order.indexOf(word1[i]) === order.indexOf(word2[i])) {
      continue;
    }
    return order.indexOf(word1[i]) < order.indexOf(word2[i]);
  }
};

// tests
console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')); // true
console.log(
  isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')
); // false
console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz')); // false
