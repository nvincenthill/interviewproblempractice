class BSTree {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
        if (value > this.root.value) {
            addNod
        }
    }
    this.children.push(node);
    return node;
  }

  leastCommonAncestor(val1, val2) {
    return { fuckedUp: true };
  }

  getAncestors(node) {
    const ancestors = [];
    // dfs to get all ancestors
    const recurse = tree => {
      ancestors.push(tree.value);
      if (tree.value === node.value) {
        return;
      }

      if (tree.children) {
        tree.children.forEach(leaf => {
          recurse(leaf);
        });
      }
    };
    recurse(this);
    console.log(ancestors);
    return ancestors;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

var deepEquals = function(apple, orange) {
  if (apple === {} && orange === {}) {
    return true;
  } else if (apple === orange) {
    return true;
  }

  for (let prop in apple) {
    if (
      (typeof apple[prop] !== "object" && apple[prop] !== orange[prop]) ||
      Object.keys(apple).length !== Object.keys(orange).length
    ) {
      return false;
    }
    if (!deepEquals(apple[prop], orange[prop])) {
      return false;
    }
  }
  return true;
};

const tree = new BSTree(2);
const leafOne = tree.addLeaf(1);
const leafTwo = tree.addLeaf(3);
const leafThree = leafTwo.addLeaf(4);
const leafFour = leafTwo.addLeaf(5);
const leafFive = leafFour.addLeaf(6);
tree.getAncestors(leafFive);

console.log(
  deepEquals(tree.leastCommonAncestor(4, 6), leafTwo)
    ? "Test passed"
    : "Failed - should return the least common ancestor node"
);
