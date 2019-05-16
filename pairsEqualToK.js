// You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

const pairs = (k, arr) => {
  let count = 0;
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i] + k;
    hash[diff] = (hash[diff] || 0) + 1;
  }

  for (let j = 0; j < arr.length; j++) {
    if (hash[arr[j]]) {
      count += hash[arr[j]];
    }
  }

  return count;
};

// tests
let arr = [1, 2, 3, 4];
console.log(pairs(1, arr)); // 3
