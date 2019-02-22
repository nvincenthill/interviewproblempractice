// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Example:
// Given nums = [-2, 0, 3, -5, 2, -1]

// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3

var Range = function(values) {
  this.values = values;
};

Range.prototype.sumRange = function(i, j) {
  let sum = 0;
  for (i; i <= j; i += 1) {
    sum += this.values[i];
  }
  return sum;
};

// tests
// const numbers = [-2, 0, 3, -5, 2, -1];
// const range = new Range(numbers);

// console.log(range.sumRange(0, 2));
// console.log(range.sumRange(2, 5));
// console.log(range.sumRange(0, 5));
