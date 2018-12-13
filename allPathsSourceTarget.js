// Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

// The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

// Example:
// Input: [[1,2], [3], [3], []]
// Output: [[0,1,3],[0,2,3]]
// Explanation: The graph looks like this:
// 0--->1
// |    |
// v    v
// 2--->3
// There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

var allPathsSourceTarget = function(graph) {
  if (!graph) {
    return [];
  }
  const paths = [];

  const DFS = (node, pathSoFar = []) => {
    if (node === graph.length - 1) {
      paths.push(pathSoFar.concat(node));
      return;
    }

    for (let i = 0; i < graph[node].length; i++) {
      DFS(graph[node][i], pathSoFar.concat(node));
    }
  };

  DFS(0);

  return paths;
};
