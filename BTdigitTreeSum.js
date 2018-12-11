// We're going to store numbers in a tree. Each node in this tree will store a single digit (from 0 to 9), and each path from root to leaf encodes a non-negative integer.

// Given a binary tree t, find the sum of all the numbers encoded in it.
//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function digitTreeSum(tree) {
  if (!tree) {
    return [];
  }

  let results = [];

  const DFS = (node, path = []) => {
    if (!node.left && !node.right) {
      path = path.concat(node.value);
      results.push(path.join(""));
      return;
    }

    if (node.left) {
      DFS(node.left, path.concat(node.value));
    }

    if (node.right) {
      DFS(node.right, path.concat(node.value));
    }
  };

  DFS(tree);
  return reducePaths(results);
}

function reducePaths(arr) {
  return arr.reduce((acc, el) => acc + Number(el), 0);
}
