// A Thief has a knapsack that can hold X lbs of stolen goods
// Each stolen good is worth a certain amount of cash, but
// the stolen good also weighs a certain weight. This means that
// the thief has to pick an optimal combination of items!
// The Thief can't pick the same item twice.

// What is the maximum worth of goods that the thief can steal?

// I - array of items (objects), capacity (number)
// O - maximum value that the thief can carry (number)
// C - Efficiency, O(n∗k) time and O(k) space, n = items.length, k = weightCapacity
// E - Invalid inputs, mixed value/ratio item sets

const knapsack = (items, capacity) => {};

// Tests

// Case 1 - One item
let arrayOfItems = [{ value: 10, weight: 100 }];
let capacity = 100;
let expectedMaxValue = 10;
console.log(
  knapsack(arrayOfItems, capacity) === expectedMaxValue
    ? "Test Passed!"
    : "Should return correct max value for a single item set"
);

// Case 2 - Items heavier than capacity
arrayOfItems = [{ value: 10, weight: 1000 }, { value: 26, weight: 1000 }];
capacity = 50;
expectedMaxValue = 0;
console.log(
  knapsack(arrayOfItems, capacity) === expectedMaxValue
    ? "Test Passed!"
    : "Should return zero for items that are too heavy"
);

// Case 3 - Valid items
arrayOfItems = [
  { value: 10, weight: 50 },
  { value: 20, weight: 50 },
  { value: 30, weight: 50 }
];
capacity = 100;
expectedMaxValue = 50;
console.log(
  knapsack(arrayOfItems, capacity) === expectedMaxValue
    ? "Test Passed!"
    : "Should return correct max value for valid items"
);

// Case 4 - Valid items with equal value ratios
arrayOfItems = [
  { value: 50, weight: 100 },
  { value: 100, weight: 200 },
  { value: 25, weight: 26 },
  { value: 25, weight: 26 }
];
capacity = 250;
expectedMaxValue = 125;
console.log(
  knapsack(arrayOfItems, capacity) === expectedMaxValue
    ? "Test Passed!"
    : "Should return correct max value for a mixed item set"
);

// Case 5 - Valid items with one heavy item
arrayOfItems = [
  { value: 50, weight: 100 },
  { value: 100, weight: 290 },
  { value: 20, weight: 26 },
  { value: 40, weight: 26 }
];
capacity = 300;
expectedMaxValue = 110;
console.log(
  knapsack(arrayOfItems, capacity) === expectedMaxValue
    ? "Test Passed!"
    : "Should return correct max value for set with one heavy valuable item"
);

// Case 6 - Invalid inputs
arrayOfItems = [];
capacity = 100;
expectedMaxValue = 0;
console.log(
  knapsack(arrayOfItems, capacity) === expectedMaxValue
    ? "Test Passed!"
    : "Should return correct max value for an invalid input - empty array"
);
