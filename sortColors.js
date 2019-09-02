const sortColors = nums => {
    
  let temp;
  let a = 0, b = 0;
  
  for (i = 0; i < nums.length; i += 1) {
      temp = nums[i];
      if (temp === 1) {
          nums[i] = nums[a + b];
          nums[a + b] = 1;
          b += 1;
      } else if (temp === 0) {
          nums[i] = nums[a + b];
          nums[a + b] = 1;
          nums[a] = 0;
          a += 1;
      }
  }

  return nums;
};

// tests
console.log(sortColors([2,0,2,1,1,0])); // [0, 0, 1, 1, 2, 2]