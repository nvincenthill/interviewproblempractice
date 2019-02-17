// Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

// Example:
// Given a / b = 2.0, b / c = 3.0.
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
// return [6.0, 0.5, -1.0, 1.0, -1.0 ].

// The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

// According to the example above:

// equations = [ ["a", "b"], ["b", "c"] ],
// values = [2.0, 3.0],
// queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ].
// The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

// I - array of equations, values, and queries
// O - array of values (results of equations)
// C - valid inputs, efficient solution
// E - none

const calcEquation = (equations, values, queries) => {
  var neighbors = {};

  // Initialize the adjacency list!
  for (var e = 0; e < equations.length; e += 1) {
    neighbors[equations[e][0]] = [];
    neighbors[equations[e][1]] = [];
  }

  for (var e = 0; e < equations.length; e += 1) {
    neighbors[equations[e][0]].push([equations[e][1], values[e]]);
    neighbors[equations[e][1]].push([equations[e][0], 1 / values[e]]);
  }

  res = [];
  for (e of queries) {
    res.push(evaluateExpression(e, neighbors));
  }
  return res;
};

function evaluateExpression(expression, neighborsList) {
  if (!(expression[0] in neighborsList) || !(expression[1] in neighborsList)) {
    return -1;
  }
  if (expression[0] == expression[1]) {
    return 1;
  }

  // Initialize with the expression we want to get! We start with the numerator's children in the queue.
  var q = neighborsList[expression[0]].slice();
  var checked = [];

  while (q.length > 0) {
    var elem = q.shift();

    // If our element is part of the expression, then we're done!
    if (elem[0] == expression[1]) {
      return elem[1];
    }
    checked.push(elem[0]);

    // Otherwise add the neighbors to the queue with updated divisors
    var neighbors = neighborsList[elem[0]];
    for (var n = 0; n < neighbors.length; n++) {
      var nextToCheck = neighbors[n];
      if (checked.includes(nextToCheck[0])) {
        continue;
      }
      q.push([nextToCheck[0], nextToCheck[1] * elem[1]]);
    }
  }

  return -1;
}

const equations = [['a', 'b'], ['b', 'c']];
const values = [2.0, 3.0];
const queries = [['a', 'c'], ['b', 'c'], ['a', 'e'], ['a', 'a'], ['x', 'x']];

console.log(calcEquation(equations, values, queries)); // [6.0, 3.0, -1.0, 1.0, -1.0]
