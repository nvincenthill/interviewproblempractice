// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2

// Given tree t:
//    4
//   / \
//  1   2

// Return true, because t has the same structure and node values with a subtree of s.

const isSubtree = function(s, t) {
  if (isSameTree(s, t)) {
    return true;
  }

  if (!s.left && !s.right) {
    return false;
  }

  if (!s.left) {
    return isSubtree(s.right, t);
  }

  if (!s.right) {
    return isSubtree(s.left, t);
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

const isSameTree = (treeOne, treeTwo) => {
  if ((treeOne === null && treeTwo) || (treeTwo === null && treeOne)) {
    return false;
  }

  if (treeOne === null && treeTwo === null) {
    return true;
  }

  if (treeOne.val !== treeTwo.val) {
    return false;
  }

  return (
    isSameTree(treeOne.left, treeTwo.left) &&
    isSameTree(treeOne.right, treeTwo.right)
  );
};
