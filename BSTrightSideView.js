// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]

const rightSideView = root => {
  const result = [];

  if (root === null) {
    return result;
  }

  let deepestSoFar = -Infinity;

  const DFS = (node, depth) => {
    if (depth > deepestSoFar) {
      deepestSoFar = depth;
      result.push(node.val);
    }

    if (node.right) {
      DFS(node.right, depth + 1);
    }

    if (node.left) {
      DFS(node.left, depth + 1);
    }
  };

  DFS(root, 0);

  return result;
};
