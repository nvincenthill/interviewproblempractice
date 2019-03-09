// A Tic-Tac-Toe board is given as a string array board. Return True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

// The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.

// Here are the rules of Tic-Tac-Toe:

// Players take turns placing characters into empty squares (" ").
// The first player always places "X" characters, while the second player always places "O" characters.
// "X" and "O" characters are always placed into empty squares, never filled ones.
// The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Example 1:
// Input: board = ["O  ", "   ", "   "]
// Output: false
// Explanation: The first player always plays "X".

// Example 2:
// Input: board = ["XOX", " X ", "   "]
// Output: false
// Explanation: Players take turns making moves.

// Example 3:
// Input: board = ["XXX", "   ", "OOO"]
// Output: false

// Example 4:
// Input: board = ["XOX", "O O", "XOX"]
// Output: true

const validTicTacToe = board => {
  const tally = { X: 0, O: 0, ' ': 0 };

  board.forEach(word =>
    word.split('').forEach(letter => (tally[letter] = tally[letter] + 1))
  );

  if (!hasValidNumberOfEachMove(tally)) {
    return false;
  }

  if (hasMultipleWins(board)) {
    return false;
  }

  return true;
};

const hasMultipleWins = board => {
  let count = 0;
  let wins = ['XXX', 'OOO'];
  for (let i = 0; i < board.length; i += 1) {
    // rows
    if (wins.includes(board[i])) {
      count += 1;
    }
    // cols
    let col = board[0][i] + board[1][i] + board[2][i];
    if (wins.includes(col)) {
      count += 1;
    }
  }

  let majorDiag = board[0][0] + board[1][1] + board[2][2];
  let minDiag = board[0][2] + board[1][1] + board[2][0];

  if (wins.includes(majorDiag)) {
    count += 1;
  }
  if (wins.includes(minDiag)) {
    count += 1;
  }

  return count > 1;
};

const hasValidNumberOfEachMove = tally => {
  if (tally['X'] < tally['O']) {
    return false;
  }

  if (tally['X'] > tally['O'] + 1) {
    return false;
  }

  return true;
};

// Tests

// let board = ['O  ', '   ', '   '];
// console.log(validTicTacToe(board)); // false

// board = ['XXX', '   ', 'OOO'];
// console.log(validTicTacToe(board)); // false

// TODO - refactor to handle multiple wins on last play
// board = ['XXX', 'OOX', 'OOX'];
// console.log(validTicTacToe(board)); // true
