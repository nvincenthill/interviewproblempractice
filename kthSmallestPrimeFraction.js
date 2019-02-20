// A sorted list A contains 1, plus some number of primes.  Then, for every p < q in the list, we consider the fraction p/q.

// What is the K-th smallest fraction considered?  Return your answer as an array of integers, where answer[0] = p and answer[1] = q.

// Examples:
// Input: A = [1, 2, 3, 5], K = 3
// Output: [2, 5]
// Explanation:
// The fractions to be considered in sorted order are:
// 1/5, 1/3, 2/5, 1/2, 3/5, 2/3.
// The third fraction is 2/5.

// Input: A = [1, 7], K = 1
// Output: [1, 7]

// TODO - refactor to better than O(n^2) time complexity
var kthSmallestPrimeFraction = function(A, K) {
  const results = [];
  for (let i = 0; i < A.length; i += 1) {
    for (let j = 0; j < A.length; j += 1) {
      results.push([A[i], A[j]]);
    }
  }

  results.sort((a, b) => {
    if (a[0] / a[1] > b[0] / b[1]) {
      return 1;
    } else {
      return -1;
    }
  });

  return results[K - 1];
};

// tests
console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3)); // [2, 5]
