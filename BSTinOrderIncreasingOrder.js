// Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

const increasingBST = function(root) {
  let resultTree;

  const dfs = function(tree) {
    if (tree !== null) {
      dfs(tree.left);
      if (resultTree) {
        let current = resultTree;
        while (current.right) {
          current = current.right;
        }
        current.right = new TreeNode(tree.val);
      } else {
        resultTree = new TreeNode(tree.val);
      }
      dfs(tree.right);
    }
  };

  dfs(root);
  return resultTree;
};
