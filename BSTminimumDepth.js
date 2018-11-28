/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var minDepth = function(root) {
  if (root === null) {
    return null;
  }

  if (root.left === null && root.right === null) {
    return 1;
  }

  // BFS
  let queue = [[root, 1]];
  let result = null;

  let BFS = function(node, depth) {
    // base case
    if (node.left === null && node.right === null) {
      result = depth;
      return;
    }
    // recursive case
    if (node.left !== null) {
      queue.push([node.left, depth + 1]);
    }

    if (node.right !== null) {
      queue.push([node.right, depth + 1]);
    }
  };

  while (queue.length > 0) {
    BFS(queue[0][0], queue[0][1]);
    queue.shift(queue[0]);
    if (result !== null) {
      return result;
    }
  }

  return result;
};
