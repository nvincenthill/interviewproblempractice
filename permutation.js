// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// I - Array of integers
// O - Array of permutations (Arrays)
// C - None
// E - Empty input

var permute = function(nums) {
  let permutations = [];

  const recurse = (permutationSoFar, remainingNums) => {
    if (remainingNums.length === 0) {
      permutations.push(permutationSoFar);
    } else {
      for (let i = 0; i < remainingNums.length; i += 1) {
        recurse(
          permutationSoFar.concat(remainingNums[i]),
          remainingNums.slice(0, i).concat(remainingNums.slice(i + 1))
        );
      }
    }
  };
  recurse([], nums);

  return permutations;
};
