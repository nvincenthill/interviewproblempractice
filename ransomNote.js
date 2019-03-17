// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

const canConstruct = function(ransomNote, magazine) {
  let tally = magazine.split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  for (let i = 0; i < ransomNote.length; i += 1) {
    if (tally[ransomNote[i]]) {
      tally[ransomNote[i]] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

// tests

// console.log(canConstruct('a', 'b')); // false
// console.log(canConstruct('aa', 'ab')); // false
// console.log(canConstruct('aa', 'aab')); // true
