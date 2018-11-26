function removeDuplicates(arr) {
  const uniques = new Set();

  for (let i = arr.length - 1; i > 0; i--) {
    uniques.add(arr[i]);
  }

  return [...uniques];
}

// run your function through some test cases here
// remember: debugging is half the battle!
const testArr = [
  [
    "/tmp/parker_is_dumb.mpg",
    "/home/parker/secret_puppy_dance.mpg",
    "/home/trololol.mov",
    "/etc/apache2/httpd.conf"
  ]
];
console.log(removeDuplicates(testArr));
