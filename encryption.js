// An English text needs to be encrypted using the following encryption scheme.
// First, the spaces are removed from the text. Let L be the length of this text.
// Then, characters are written into a grid, whose rows and columns have the following constraints:

// Math.floor(sqr(L)) <= rows <= cols <= Math.ceil(sqr(L))

// I - string (English sentence)
// O - encrypted string
// C - none
// E - empty string

function encryption(sentence) {
  const condensed = sentence.split(' ').join('');
  let numRows = Math.floor(Math.sqrt(sentence.length));
  const numCols = Math.ceil(Math.sqrt(sentence.length));

  if (numRows * numCols < condensed.length) {
    numRows += 1;
  }

  // create matrix
  let matrix = [];
  let counter = 0;
  for (let i = 0; i < numRows; i += 1) {
    matrix.push([]);
    let rowCounter = numCols;
    while (rowCounter > 0) {
      if (condensed[counter] !== undefined) {
        matrix[i].push(condensed[counter]);
        counter += 1;
      }
      rowCounter -= 1;
    }
  }

  let encryptedText = '';
  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j += 1) {
      if (matrix[j][i] !== undefined) {
        encryptedText += matrix[j][i];
      }
    }
    encryptedText += ' ';
  }
  return encryptedText;
}

console.log(encryption('have a nice day')); // hae and via ecy
console.log(encryption('chillout')); // clu hlt io
console.log(encryption('feedthedog')); // fto ehg ee dd
