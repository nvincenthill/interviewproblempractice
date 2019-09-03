// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

// Example:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

// Output: ["AAAAACCCCC", "CCCCCAAAAA"]

const findRepeatedDnaSequences = function(s) {
  const sequences = {};
  const set = new Set();

  for (let i = 0; i < s.length - 9; i += 1) {
    let potential = s.substring(i, i + 10);

    let size = set.size;
    set.add(potential);
    let newSize = set.size;

    if (size === newSize) {
      sequences[potential] = true;
    }
  }

  return Object.keys(sequences);
};

// tests
console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')); // ["AAAAACCCCC","CCCCCAAAAA"]
