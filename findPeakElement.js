// A peak element is an element that is greater than its neighbors.

// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that nums[-1] = nums[n] = -∞.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 1 or 5
// Explanation: Your function can return either index number 1 where the peak element is 2,
//              or index number 5 where the peak element is 6.
// Note:

// Your solution should be in logarithmic complexity.

// I - array of numbers
// O - number (index of a peak)
// C - O(log(n)) time complexity
// E - always increasing numbers?

const findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let midpoint, before, after;

  while (left <= right) {
    midpoint = Math.floor((left + right) / 2);
    before = midpoint - 1 >= 0 ? nums[midpoint - 1] : -Infinity;
    after = midpoint + 1 < nums.length ? nums[midpoint + 1] : -Infinity;

    if (before < nums[midpoint] && after < nums[midpoint]) {
      return midpoint;
    }

    if (before > after) {
      right = midpoint - 1;
    } else {
      left = midpoint + 1;
    }
  }
};

// tests
console.log(findPeakElement([1, 6, 5, 4, 3, 2, 1])); // 1
