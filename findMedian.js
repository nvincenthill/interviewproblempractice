function arrayMedian(seq) {
  let sorted = seq.sort((a, b) => a - b);
  let midpoint = Math.floor(seq.length / 2);
  if (seq.length % 2 === 0) {
    return (sorted[midpoint] + sorted[midpoint - 1]) / 2;
  } else {
    return sorted[midpoint];
  }
}
