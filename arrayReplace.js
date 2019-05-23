const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
  return inputArray.map(el => {
    if (el === elemToReplace) {
      return substitutionElem;
    }

    return el;
  });
};

// tests
// console.log(arrayReplace([1, 2, 3, 4], 2, 'X')); // [1, 'X', 3, 4]
