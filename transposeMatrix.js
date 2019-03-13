// Given a matrix A, return the transpose of A.

// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

// Example 1:

// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:

// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

// Note:

// 1 <= A.length <= 1000
// 1 <= A[0].length <= 1000

var transpose = function(A) {
  let result = [];
  for (let row = 0; row < A[0].length; row += 1) {
    result.push([]);
    for (let col = 0; col < A.length; col += 1) {
      result[row].push(A[col][row]);
    }
  }

  return result;
};

// tests

// console.log(transpose([[1,2,3],[4,5,6],[7,8,9]])) // [[1,4,7],[2,5,8],[3,6,9]]
