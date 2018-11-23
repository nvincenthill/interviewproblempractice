const mergeSort = arr => {
  // base case
  if (arr.length === 1) {
    return arr;
  }
  // recursive case
  const half = Math.floor(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  const merged = [];
  const finalLength = left.length + right.length;
  let i = 0,
    j = 0;
  while (merged.length < finalLength) {
    if (left[i] < right[j] || right[j] === undefined) {
      merged.push(left[i++]); // works because both arrays are sorted smallest to largest
    } else {
      merged.push(right[j++]); // works because both arrays are sorted smallest to largest
    }
  }
  return merged;
};

console.log(mergeSort([1, 5, 7, 3, 9, 10, 2]));
