// I - number of steps (n, number (int)) and number of steps per jump (k, number (int))
// O - array of possible sequences (array)
// C - efficient O(n * k) time, O(n) space
// E - n = 0, k = 0

function climbingStaircase(n, k) {
  let results = [];

  if (n === 0) {
    results.push([]);
    return results;
  }

  const permute = (stepsLeft, sequenceSoFar) => {
    if (stepsLeft === 0) {
      results.push(sequenceSoFar);
      return;
    }

    for (let i = 0; i < k; i += 1) {
      permute(n - i, sequenceSoFar.push(i));
    }
  };

  permute(n, []);
  return results;
}
