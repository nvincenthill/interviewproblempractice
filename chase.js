const maxRangeSum = arr => {
  let maxSum = arr[0];
  let globalSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxSum = Math.max(arr[i], arr[i] + maxSum);
    if (maxSum > globalSum) {
      globalSum = maxSum;
    }
  }

  return globalSum;
};

// console.log(maxRangeSum([7, -3, -10, 4, 2, 8, -2, 4, -5, -2]));
// return 16

var numbersToWords = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety"
};

var numbersToPlace = {
  10: "Ten",
  100: "Hundred",
  1000: "Thousand",
  1000000: "Million",
  1000000000: "Billion"
};

const textDollar = num => {
  const convertToDollars = num => {
    if (numbersToWords[num]) {
      return numbersToWords[num];
    }

    if (num < 100) {
      const numberFloorOf10 = Math.floor(num / 10) * 10;
      const leftOver = num % 10;
      return numbersToWords[numberFloorOf10] + numbersToWords[leftOver];
    }

    let place;

    if (num < 1000) {
      place = 100;
    } else {
      place = 1000;
    }
    while (num / place >= 1000) {
      place *= 1000;
    }

    const numberFloorOfPlace = Math.floor(num / place);
    const leftOver = num % place;
    return (
      convertToDollars(numberFloorOfPlace) +
      numbersToPlace[place] +
      (leftOver > 0 ? convertToDollars(leftOver) : "")
    );
  };
  let raw = convertToDollars(num);
  return raw + "Dollars";
};

// console.log(textDollar(0));
