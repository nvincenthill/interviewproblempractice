// Given a 2D array of digits or grid, try to find the occurrence of a given 2D pattern of digits. For example, consider the following grid:

// 1234567890
// 0987654321
// 1111111111
// 1111111111
// 2222222222

// Assume we need to look for the following 2D pattern array:

// 876543
// 111111
// 111111

// The 2D pattern begins at the second row and the third column of the grid. The pattern is said to be present in the grid.

// Function Description

// Complete the gridSearch function in the editor below. It should return YES if the pattern exists in the grid, or NO otherwise.

// gridSearch has the following parameter(s):

// G: the grid to search, an array of strings
// P: the pattern to search for, an array of strings
// Input Format

// The first line contains an integer , the number of test cases.

// Each of the  test cases is represented as follows:
// The first line contains two space-separated integers  and , indicating the number of rows and columns in the grid .
// This is followed by  lines, each with a string of  digits representing the grid .
// The following line contains two space-separated integers,  and , indicating the number of rows and columns in the pattern grid .
// This is followed by  lines, each with a string of  digits representing the pattern .

// Constraints

// Output Format

// Display YES or NO, depending on whether  is present in .

// Sample Input

// 2
// 10 10
// 7283455864
// 6731158619
// 8988242643
// 3830589324
// 2229505813
// 5633845374
// 6473530293
// 7053106601
// 0834282956
// 4607924137
// 3 4
// 9505
// 3845
// 3530
// 15 15
// 400453592126560
// 114213133098692
// 474386082879648
// 522356951189169
// 887109450487496
// 252802633388782
// 502771484966748
// 075975207693780
// 511799789562806
// 404007454272504
// 549043809916080
// 962410809534811
// 445893523733475
// 768705303214174
// 650629270887160
// 2 2
// 99
// 99
// Sample Output

// YES
// NO

function equals(G, P, gridRowIndex, gridColIndex) {
  let pRow = P.length;
  let pCol = P[0].length;

  for (let i = 0; i < pRow; i += 1) {
    for (let j = 0; j < pCol; j += 1) {
      if (G[gridRowIndex + i][gridColIndex + j] !== P[i][j]) {
        return false;
      }
    }
  }

  return true;
}

function gridSearch(G, P) {
  let gRow = G.length;
  let gCol = G[0].length;

  let pRow = P.length;
  let pCol = P[0].length;
  for (let gri = 0; gri < gRow - pRow + 1; gri += 1) {
    for (let gci = 0; gci < gCol - pCol + 1; gci += 1) {
      if (equals(G, P, gri, gci)) {
        return "YES";
      }
    }
  }

  return "NO";
}
