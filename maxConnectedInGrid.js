// Connected Cells in a Grid from HackerRank

// Input - 2d array (n x m) of ones and zeros
// Output - number (sum of max connected "island" of ones)
// Constraints - Efficient solution, n > 0, m > 10
// Edge Cases - none

const getAreaOfGroup = (r, c, matrix, memo) => {
  if (r < 0) return 0;
  if (c < 0) return 0;
  if (r > matrix.length - 1) return 0;
  if (c > matrix[r].length - 1) return 0;
  if (matrix[r][c] === 1 && !memo['' + r + c]) {
    memo['' + r + c] = true;
    return (
      1 +
      getAreaOfGroup(r - 1, c, matrix, memo) +
      getAreaOfGroup(r + 1, c, matrix, memo) +
      getAreaOfGroup(r, c - 1, matrix, memo) +
      getAreaOfGroup(r, c + 1, matrix, memo) +
      getAreaOfGroup(r - 1, c - 1, matrix, memo) +
      getAreaOfGroup(r - 1, c + 1, matrix, memo) +
      getAreaOfGroup(r + 1, c - 1, matrix, memo) +
      getAreaOfGroup(r + 1, c + 1, matrix, memo)
    );
  }
  return 0;
};

const getMaxAreaOfIsland = matrix => {
  let maxArea = 0;

  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      if (matrix[row][col] === 1) {
        let area = getAreaOfGroup(row, col, matrix, {});
        maxArea = Math.max(area, maxArea);
      }
    }
  }

  return maxArea;
};

// tests
// let arr = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 0]];
// console.log(getMaxAreaOfIsland(arr)); // 5
