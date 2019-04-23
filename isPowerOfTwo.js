// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true
// Explanation: 2^0 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 2^4 = 16

var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }

  if (n <= 2) {
    return true;
  }

  if (n % 2 !== 0) {
    return false;
  }

  return isPowerOfTwo(n / 2);
};

// tests
// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(16)); // true
// console.log(isPowerOfTwo(17)); // false
