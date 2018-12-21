// Write a program to find the nth super ugly number.

// Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.

// Example:

// Input: n = 12, primes = [2,7,13,19]
// Output: 32
// Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19] of size 4.

const nthSuperUglyNumber = function(n, primes) {
  const len = primes.length;
  let index = new Array(len).fill(0);

  const results = [1];

  for (let i = 1; i < n; i++) {
    let minNumber = Infinity;

    for (let j = 0; j < len; j++) {
      let item = index[j];
      minNumber = Math.min(minNumber, primes[j] * results[item]);
    }

    results[i] = minNumber;

    for (let j = 0; j < len; j++) {
      let item = index[j];
      if (minNumber === primes[j] * results[item]) {
        index[j]++;
      }
    }
  }

  return results[n - 1];
};

let n = 12;
let primes = [2, 7, 13, 19];
console.log(
  nthSuperUglyNumber(n, primes) === 32
    ? "Test Passed!"
    : "Test failed - should return 32 for n = 12, primes = [2, 7, 13, 19]"
);
