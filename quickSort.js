function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var pivot = arr[0];
  var lesser = [];
  var greater = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}

// sample of arrays to sort
var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(quickSort(arrayRandom.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
