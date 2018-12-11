// You have a binary tree t. Your task is to find the largest value in each row of this tree. In a tree, a row is a set of nodes that have equal depth. For example, a row with depth 0 is a tree root, a row with depth 1 is composed of the root's children, etc.

// Return an array in which the first element is the largest value in the row with depth 0, the second element is the largest value in the row with depth 1, the third element is the largest element in the row with depth 2, etc.

//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
//
function largestValuesInTreeRows(t) {
  let values = [];
  let depth = 0;

  function traverse(current, depth) {
    if (!current) {
      return;
    }

    if (!values[depth]) {
      values[depth] = current.value;
    } else {
      if (current.value > values[depth]) {
        values[depth] = current.value;
      }
    }

    traverse(current.left, depth + 1);
    traverse(current.right, depth + 1);
  }

  traverse(t, depth);

  return values;
}
