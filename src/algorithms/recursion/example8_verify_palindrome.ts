const isPalindrome = (str: string): boolean => {
  if (str.length <= 1) return true; // 3. True is string has only one character
  if (str[0] !== str[str.length - 1]) return false; // 1. False if string characters do not match
  return isPalindrome(str.slice(1, str.length - 1)); // 2. If match test for inner string parts
};

// Verify is a string is palindrome using recursion
const result1 = isPalindrome("rotator");
console.log(result1); // true

const result2 = isPalindrome("raccoon");
console.log(result2); // false

export default isPalindrome;
