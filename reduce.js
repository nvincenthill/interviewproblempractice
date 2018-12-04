Array.prototype.myReduce = function(callback, initialVal) {
  var accumulator = initialVal === undefined ? undefined : initialVal;
  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined)
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    else accumulator = this[i];
  }
  return accumulator;
};

const assertEquality = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const testArray = [1, 0, 32, 12, 10];
let test = testArray.reduce((acc, el) => acc + el);
let actual = testArray.myReduce((acc, el) => acc + el);
console.log(
  assertEquality(test, actual)
    ? "test passed"
    : "should implement reduce correctly"
);
