function findMedian(seq) {
  seq.sort((a, b) => a - b);
  let midpoint = Math.floor(seq.length / 2);
  if (seq.length % 2 === 0) {
    let avg = seq[midpoint] + seq[midpoint - 1];
    return avg / 2;
  } else {
    return seq[midpoint];
  }
}
