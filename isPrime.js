const isPrime = n => {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (Number.isInteger(n / i)) {
      return false;
    }
  }
  return true;
};

// tests
// console.log(isPrime(1)); // false
// console.log(isPrime(11)); // true
// console.log(isPrime(100)); // false
