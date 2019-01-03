// Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

// Examples:
// [2,3,4] , the median is 3

// [2,3], the median is (2 + 3) / 2 = 2.5

// Given an array of number integers, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Your job is to output the median array for each window in the original array.

// I - Array of integer numbers
// O - Array of medians (numbers)
// C - O(n^2 * log(n)) time complexity solution
// E - None

const getMedian = arr => {
  let sorted = arr.slice().sort((a, b) => a - b);
  let midpoint;
  if (sorted.length % 2 !== 0) {
    midpoint = Math.floor(sorted.length / 2);
    return sorted[midpoint];
  } else {
    midpoint = Math.floor(sorted.length / 2) - 1;
    return (sorted[midpoint] + sorted[midpoint + 1]) / 2;
  }
};

const medianSlidingWindow = function(numbers, k) {
  const medians = [];
  const window = numbers.slice(0, k);
  let counter = k;
  while (true) {
    medians.push(getMedian(window));
    if (numbers[counter] === undefined) {
      return medians;
    }
    window.shift();
    window.push(numbers[counter]);
    counter += 1;
  }
};
