// Given an input string, reverse the string word by word.

// Example:

// reverseWords("the sky is blue") -> "blue is sky the"

// I - string
// O - string
// C - None
// E - string.length === 0, one word in string

const reverseWords = str => {
  const words = str.split(" ");
  let reversedWords = [];
  while (words.length > 0) {
    let temp = words.pop();
    reversedWords.push(temp);
  }
  return reversedWords.join(" ");
};

console.log(reverseWords("the sky is blue"));
