// I - number
// O - number (sum)
// C - none
// E - num = 0, num < 3 || 5

const naturalSum = num => {
  if (num === 0) {
    return 0;
  }
  let result;
  let multiples = [];
  // find all multiples of 3 && 5 below num
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  return multiples.reduce((acc, el) => acc + el);
};

console.log(naturalSum(100)); // 23

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.
