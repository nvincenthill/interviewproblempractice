// I - array of integers, i as an integer, j as an integer
// O - Number (sum)
// C - None
// E - Array.length === 0, i === undefined, j === undefined

const sumRange = (arr, i, j) => {
  if (arr.length === 0) {
    return 0;
  }
  return arr.slice(i, j + 1).reduce((acc, el) => acc + el);
};

console.log(sumRange([-2, 0, 3, -5, 2, -1], 0, 5));

// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Example:
// Given nums = [-2, 0, 3, -5, 2, -1]

// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
