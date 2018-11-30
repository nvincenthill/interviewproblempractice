const nFib = function(n) {
  const mem = [0, 1];
  while (n > 1) {
    mem.push(mem.shift() + mem[0]);
    n--;
  }
  return mem[n];
};
