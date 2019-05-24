const removeArrayPart = (inputArray, l, r) => {
  let result = [];
  for (let i = 0; i < inputArray.length; i += 1) {
    if (i < l || i > r) {
      result.push(inputArray[i]);
    }
  }
  return result;
};

// tests
// const inputArray = [2, 3, 2, 3, 4, 5];
// console.log(removeArrayPart(inputArray, 2, 4)); // [2, 3, 5]
