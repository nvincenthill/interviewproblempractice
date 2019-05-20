const flatten = function(root) {
  if (!root) {
    return null;
  }

  var leftTail = flatten(root.left);
  var rightTail = flatten(root.right);

  if (!leftTail) {
    return rightTail ? rightTail : root;
  }

  leftTail.right = root.right;
  root.right = root.left;
  root.left = null;

  return rightTail ? rightTail : leftTail;
};
