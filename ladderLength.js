// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

const ladderLength = function(beginWord, endWord, wordList) {
  let minSteps = 0;
  const queue = [beginWord];
  const usedWords = {};

  if (beginWord.length !== endWord.length || !beginWord || !endWord) {
    return minSteps;
  }

  while (queue) {
    let currentWord = queue.shift();
    minSteps += 1;

    for (let word in wordList) {
      if (
        currentWord &&
        isAdjacent(currentWord, wordList[word]) &&
        !usedWords[wordList[word]]
      ) {
        queue.unshift(wordList[word]);
        usedWords[currentWord] = true;
      }
    }
    if (currentWord === endWord) {
      return minSteps;
    }
  }

  return minSteps;
};

const isAdjacent = function(current, next) {
  let differences = 0;
  for (let i = 0; i < current.length; i += 1) {
    if (current[i] !== next[i]) {
      differences += 1;
    }
  }
  return differences === 1;
};

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(
  ladderLength(beginWord, endWord, wordList) === 5
    ? "Test passed"
    : "Should return shortest path to end word"
);
