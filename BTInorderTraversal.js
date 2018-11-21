/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var inOrderTraversal = function(root) {
  let traversal = [];

  let traverse = node => {
    if (node !== null) {
      if (node.left) {
        traverse(node.left);
      }
      traversal.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    } else {
      return;
    }
  };

  traverse(root);

  return traversal;
};
