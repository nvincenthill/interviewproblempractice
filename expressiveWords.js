// Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  Here, we have groups, of adjacent letters that are all the same character, and adjacent characters to the group are different.  A group is extended if that group is length 3 or more, so "e" and "o" would be extended in the first example, and "i" would be extended in the second example.  As another example, the groups of "abbcccaaaa" would be "a", "bb", "ccc", and "aaaa"; and "ccc" and "aaaa" are the extended groups of that string.

// For some given string S, a query word is stretchy if it can be made to be equal to S by extending some groups.  Formally, we are allowed to repeatedly choose a group (as defined above) of characters c, and add some number of the same character c to it so that the length of the group is 3 or more.  Note that we cannot extend a group of size one like "h" to a group of size two like "hh" - all extensions must leave the group extended - ie., at least 3 characters long.

// Given a list of query words, return the number of words that are stretchy.

// Example:
// Input:
// S = "heeellooo"
// words = ["hello", "hi", "helo"]
// Output: 1
// Explanation:
// We can extend "e" and "o" in the word "hello" to get "heeellooo".
// We can't extend "helo" to get "heeellooo" because the group "ll" is not extended.

function expressiveWords(S, words) {
  let count = 0;

  for (let w of words) {
    let i = 0;
    let j = 0;

    for (; i < S.length && j < w.length && w[j] === S[i]; ) {
      let lenS = 1;
      let lenW = 1;

      for (; i + lenS < S.length && S[i + lenS] === S[i]; lenS += 1);
      for (; j + lenW < w.length && w[j + lenW] === w[j]; lenW += 1);

      if (lenS < lenW || (lenS > lenW && lenS < 3)) {
        break;
      }
      i += lenS;
      j += lenW;
    }

    if (i === S.length && j === w.length) {
      count++;
    }
  }

  return count;
}
