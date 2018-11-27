function countingSort(theArray, maxValue) {
  const numCounts = new Array(maxValue + 1).fill(0);

  theArray.forEach(num => {
    numCounts[num] += 1;
  });

  const sortedArray = [];
  let currentSortedIndex = 0;

  numCounts.forEach((count, num) => {
    for (let i = 0; i < count; i++) {
      sortedArray[currentSortedIndex] = num;
      currentSortedIndex++;
    }
  });

  return sortedArray;
}

console.log(countingSort([1, 2, 3, 2, 8, 9, 5, 4, 7, 6]));
