// Waiting for actions to finish is implicit in the synchronous model, while it is explicit, under our control, in the asynchronous one.

const giveSomethingAfterOneSecond = callback => {
  setTimeout(() => {
    callback(null, 'something');
  }, 1000);
};

giveSomethingAfterOneSecond((err, data) => {
  if (err) {
    return;
  }
  console.log(data);
});

const giveSomethingAfterTwoSeconds = callback => {
  setTimeout(() => {
    callback(null, 'something else');
  }, 2000);
};

const giveSomethingAfterAFewSeconds = callback => {
  setTimeout(() => {
    callback(null, 'something completely different');
  }, Math.random() * 5000);
};

const arr = [
  giveSomethingAfterOneSecond,
  giveSomethingAfterTwoSeconds,
  giveSomethingAfterAFewSeconds
];

// I - array of async functions
// O - function which calls each input function
// C - handle async issues correctly! Error first callback pattern
// E - none

const callbackDotAll = arrayOfFunctions => {
  // declare and initialize a store of data
  const store = [];
  // return closure
  return callback => {
    for (let i = 0; i < arrayOfFunctions.length; i++) {
      arrayOfFunctions[i].call(null, (err, singlePieceOfData) => {
        if (err) {
          console.log(err);
          return;
        }
        store.push(singlePieceOfData);

        if (store.length === arrayOfFunctions.length) {
          callback(null, store);
        }
      });
    }
  };
};

const allTogetherNow = callbackDotAll(arr);

allTogetherNow((err, allDataFromFunctions) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(allDataFromFunctions);
});
