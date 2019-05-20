// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

// Example:

// Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
// Output: [3,3,5,5,6,7]
// Explanation:

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

const maxSlidingWindow = (nums, k) => {
  if (nums.length === 0) {
    return [];
  }

  let results = [];

  for (let i = 0; i < nums.length - k + 1; i += 1) {
    let window = nums.slice(i, i + k);
    results.push(Math.max(...window));
  }

  return results;
};

// tests
// const nums = [1,3,-1,-3,5,3,6,7]
// const k = 3
// console.log(maxSlidingWindow(nums, k)) // [3,3,5,5,6,7]
