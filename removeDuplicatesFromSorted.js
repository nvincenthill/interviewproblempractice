// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.

// I - array of sorted integers
// O - length of array with duplicates removed
// C - O(n) space (in place)
// E - empty array

const removeDuplicates = function(nums) {
  let pointer = 0;
  for (let i = 1; i <= nums.length; ++i) {
    if (nums[i] !== nums[i - 1]) {
      nums.splice(pointer, i - pointer - 1);
      pointer += 1;
      i = pointer;
    }
  }
  return nums.length;
};

const nums = [1, 1, 2];
console.log(removeDuplicates(nums)); // 2 and nums = [1, 2]
