// Given a list of keywords and their popularity
// implement getTop3(prefix) returns the top 3 most popular keywords with this prefix

// Example
const exampleData = {
  apple: 100,
  app: 99,
  amazon: 88,
  boy: 74,
  bob: 50,
  book: 77,
  abc: 89,
  base: 80,
  blah: 10,
  ape: 9
};

// getTop3('a') => ['apple', 'app', 'abc']
// getTop3('ap') => ['apple', 'app', 'ape']
// getTop3('b') => ['base', 'boy', 'bob']

// Input - string (prefix)

// Output - an array of matches, sorted by popularity

// Edge Cases - if no matches - return empty array, if less than three matches, return an smaller array

// Constraints - needs to be fast, go for optimal time

// a -> [apple, app, ape]
// b -> [baby, bob, book]

const createSubstrings = str => {
  let results = [];
  for (let i = 1; i < str.length + 1; i++) {
    results.push(str.substring(0, i));
  }

  return results;
};

const insertItem = (arr, pair) => {
  // check each value in arr
  for (let i = 0; i < 3; i++) {
    if (arr.length < 3) {
      arr.push(pair);
    }
    if (pair[i] > arr[i][1]) {
      arr[i].splice(i, 0, pair);
    }
  }
  return arr;
};

const createDictionary = obj => {
  // create a dictionary
  const dictionary = {};
  // for every key in obj
  for (let name in obj) {
    // substring the key
    let substrings = createSubstrings(name);
    // add all substrings
    for (let j = 0; j < substrings.length; j++) {
      console.log(name);
      const pair = [name, obj[name]];
      let current = dictionary[substrings[j]];
      if (current !== undefined) {
        current = insertItem(current, pair);
      } else {
        dictionary[substrings[j]] = [pair];
      }
    }
  }

  return dictionary;
};

let dictionary = createDictionary(exampleData);
console.log(dictionary["a"]);

const getTop3 = prefix => {
  if (dictionary[prefix] !== undefined) {
    return dictionary[prefix];
  } else {
    return [];
  }
};

console.log(getTop3("a"));
