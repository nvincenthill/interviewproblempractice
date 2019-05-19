// Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

// You could go through the array from both ends in inwards direction using two pointers (indices). Keep a balance, starting with 0, as follows:

// When the balance is negative move the left pointer one step to the right while increasing the balance with the value you leave behind. When the balance is positive, move the right pointer one step to the left while decreasing the balance with the value you leave behind.

// When the two pointers meet each other, check the balance. If it is zero, you have success.

const balancedSums = arr => {
  let left = 0;
  let right = arr.length - 1;
  let balance = 0;

  while (left !== right) {
    if (balance < 0) {
      balance += arr[left];
      left += 1;
    } else if (balance > 0) {
      balance -= arr[right];
      right -= 1;
    } else {
      if (arr[right] === 0) {
        right -= 1;
      } else if (arr[left] === 0) {
        left += 1;
      } else {
        balance -= arr[right];
        right -= 1;
      }
    }
  }

  return balance === 0;
};

console.log(balancedSums([1, 1, 4, 1, 1])); // true
console.log(balancedSums([1, 2, 3, 3])); // true
console.log(balancedSums([1, 2, 3])); // false
console.log(balancedSums([2, 0, 0, 0])); // true
console.log(balancedSums([0, 0, 2, 0])); // true
