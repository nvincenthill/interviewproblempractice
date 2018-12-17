// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// brute force solution

var maxArea = function(height) {
  if (height.length === 2) {
    return Math.min(height[0], height[1]);
  }
  let maxVolume = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      if (i !== j) {
        let maxHeight = Math.max(height[i], height[j]);
        let volume = maxHeight * (i - j - 1);
        if (volume > maxVolume) {
          maxVolume = volume;
        }
      }
    }
  }
  return maxVolume;
};
