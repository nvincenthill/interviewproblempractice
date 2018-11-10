const binaryAdd = (str1, str2) => {
  ///we need to track the carry value
  //we also need to track the sum which will the be result
  let carry = 0;
  let result = "";
  //we will need to do the add and carry operation at least as many times as the
  //longest number, so let's keep track of two lengths for iteration
  let i = 0;
  let j = 0;
  //while we have digits left on each, lets do the sum and carry
  while (i <= str1.length - 1 || j <= str2.length - 1) {
    //magic
    let num1 = i < 0 ? 0 : str1[i] | 0;
    let num2 = j < 0 ? 0 : str2[j] | 0;
    carry += num1 + num2; // sum of the two single digits
    result = (carry % 2) + result; //concat string in proper order
    carry = (carry / 2) | 0; // remove fractionals
    i++;
    j++;
  }
  //what if afterwards there is still carry leftover?
  //if we still have a carry??
  if (carry) {
    result = carry + result;
  }
  return result;
};

console.log(binaryAdd("10101", "0010"));
