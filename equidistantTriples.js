function equidistantTriples(coordinates) {
  const nums = coordinates.reduce((acc, current) => {
    if (!acc[current]) {
      acc[current] = true;
    }
    return acc;
  }, {});

  let counter = 0;

  for (let i = 0; i < coordinates.length; i++) {
    for (let j = i + 1; j < coordinates.length; j++) {
      const mid = (coordinates[i] + coordinates[j]) / 2;
      if (nums[mid]) {
        counter += 1;
      }
    }
  }

  return counter;
}
