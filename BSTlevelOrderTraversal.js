/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  let queue = [[root, 0]];
  let levelOrderTraveral = [];

  while (queue.length !== 0) {
    let node = queue.shift();
    let level = node[1];

    if (node[0].left) {
      queue.push([node[0].left, level + 1]);
    }
    if (node[0].right) {
      queue.push([node[0].right, level + 1]);
    }
    if (levelOrderTraveral[node[1]]) {
      levelOrderTraveral[node[1]].push(node[0].val);
    } else {
      levelOrderTraveral[node[1]] = [node[0].val];
    }
  }

  return levelOrderTraveral;
};
