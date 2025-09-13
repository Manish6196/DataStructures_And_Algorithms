import reverseRecorsively from "./example6_reverse_a_string";

const verifyPalindrome = (str: string): boolean => {
  return str === reverseRecorsively(str); // True if reversed is same as str
};

// Verify is a string is palindrome using recursion
const result1 = verifyPalindrome("rotator");
console.log(result1); // true

const result2 = verifyPalindrome("raccoon");
console.log(result2); // false

export default verifyPalindrome;
