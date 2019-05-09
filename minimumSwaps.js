// Complete the minimumSwaps function below.
const minimumSwaps = arr => {
  // create index lookup table
  let indexes = [];
  let swaps = 0;
  for (let i = 0; i < arr.length; i += 1) {
    indexes[arr[i] - 1] = i;
  }

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] !== i) {
      swaps += 1;
      arr = swap(i, indexes[i], arr);
    }
  }

  return swaps;
};

const swap = (idx1, idx2, arr) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
};

// tests
// let arr = [7, 1, 3, 2, 4, 5, 6];
// console.log(minimumSwaps(arr)); // 5
// let arr2 = [1, 3, 5, 2, 4, 6, 7];
// console.log(minimumSwaps(arr2)); // 3
