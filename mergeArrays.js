function mergeArrays(arr1, arr2) {
  let merged = [];

  let totalLength = arr1.length + arr2.length;
  let i = 0,
    j = 0;

  while (merged.length < totalLength) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i++]);
    } else {
      merged.push(arr2[j++]);
    }
  }

  return merged;
}

var myArray = [3, 4, 6, 10, 11, 15];
var otherArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, otherArray));
// [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
