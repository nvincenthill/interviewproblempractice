const vowelDoubler = arr => {
  let vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  for (let i = arr.length - 1; i > 0; i--) {
    if (vowels.includes(arr[i])) {
      arr.splice(i, 0, arr[i]);
    }
  }
  return arr;
};

let testArr = ["w", "h", "a", "t"];
console.log(vowelDoubler(testArr)); // ['w','h','a','a','t']
