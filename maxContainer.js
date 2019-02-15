// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// I - array of heights
// O - number (max area of water contained)
// C - efficient solution O(n) with two pointers
// E - array.length < 2

const maxArea = function(heights) {
  let maxWater = null;
  let l = 0;
  let r = heights.length - 1;
  for (let i = 0; i < heights.length; i += 1) {
    while (l < r) {
      maxWater = Math.max(maxWater, Math.min(heights[l], heights[r]) * (r - l));
      if (heights[l] < heights[r]) {
        l += 1;
      } else {
        r -= 1;
      }
    }
    return maxWater;
  }
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49);
