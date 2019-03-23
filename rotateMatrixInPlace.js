// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (counter-clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.

// I - 2D array matrix
// O - rotated 2D array matrix
// C - O(1) space complexity
// E - invalid inputs, arr.length = 0 || 1

const rotateInPlace = matrix => {
  let len = matrix.length;
  for (let x = 0; x < len / 2; x += 1) {
    // consider elements in group of 4 in current square
    for (let y = x; y < len - x - 1; y += 1) {
      // store current cell in temp variable
      let temp = matrix[x][y];

      // move values from right to top
      matrix[x][y] = matrix[y][len - 1 - x];

      // move values from bottom to right
      matrix[y][len - 1 - x] = matrix[len - 1 - x][len - 1 - y];

      // move values from left to bottom
      matrix[len - 1 - x][len - 1 - y] = matrix[len - 1 - y][x];

      // assign temp to left
      matrix[len - 1 - y][x] = temp;
    }
  }

  return matrix;
};

// tests

let matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];

// console.log(rotateInPlace(matrix));

// [[15,13, 2, 5],
// [14, 3, 4, 1],
// [12, 6, 8, 9],
// [16, 7,10,11]]

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotateInPlace(matrix));

// [[7,4,1],
// [8,5,2],
// [9,6,3]]
