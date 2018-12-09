const isPerfectSquare = function(num) {
  if (num < 2) {
    return true;
  }

  let i = 2;

  while (i <= Math.sqrt(num)) {
    if (i * i === num) {
      return true;
    }
    i += 1;
  }
  return false;
};
