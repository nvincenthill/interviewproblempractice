// Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// Note that your solution should have linear complexity because this is what you will be asked during an interview.

// Example

// For s = "4[ab]", the output should be
// decodeString(s) = "abababab";

// For s = "2[b3[a]]", the output should be
// decodeString(s) = "baaabaaa";

// For s = "z1[y]zzz2[abc]", the output should be
// decodeString(s) = "zyzzzabcabc".

// I - string, coded
// O - string, decoded
// C - efficiency: time complexity O(n), space complexity O(n)
// E - empty string

function decodeString(str) {
  let regex = /(\d+)\[([a-z]*)\]/gi;
  let result = str.replace(regex, (match, num, substr) => substr.repeat(num));
  let recall = regex.test(result);
  if (recall) {
    return decodeString(result);
  }
  return result;
}
