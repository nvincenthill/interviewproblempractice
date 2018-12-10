var topKFrequent = function(words, k) {
  const topKMostFrequent = [];
  const tally = words.reduce((tally, word) => {
    tally[word] = (tally[word] || 0) + 1;
    return tally;
  }, {});

  let pairs = Object.entries(tally);
  let sortedPairs = pairs.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }

    if (a[1] < b[1]) {
      return 1;
    }

    if (a[0] < b[0]) {
      return -1;
    } else {
      return 1;
    }
  });
  for (let i = 0; i < k; i++) {
    topKMostFrequent.push(sortedPairs[i][0]);
  }
  return topKMostFrequent;
};
