// Given an array of strings, return a new array with all unique strings (all duplicates removed)

function removeDuplicates(arr) {
  const uniques = new Set();

  for (let i = arr.length - 1; i > 0; i--) {
    uniques.add(arr[i]);
  }

  return [...uniques];
}

const testArr = [['example1', 'example2', 'example3', 'example3']];
console.log(removeDuplicates(testArr));
// prints ['example1', 'example2', 'example3']
