// Rotate a 2D array clockwise
let rotate2DArray = arr => {
  let newArr = [];
  let rows = arr[0].length;
  let cols = arr.length;
  for (let i = 0; i < rows; i++) {
    let newRow = [];
    for (let j = 0; j < arr.length; j++) {
      newRow.unshift(arr[j][i]);
    }
    newArr.push(newRow);
  }
  return newArr;
};

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotate2DArray(array)); // => [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
