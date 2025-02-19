/**
 * Moves all zeroes in the array to the end while maintaining the relative order of non-zero elements.
 *
 * @param arr - The input array of numbers.
 */
export const moveZeroesToEnd = (arr: number[]): void => {
  let nonZeroIndex = 0; // Initialize a pointer for the position to place the next non-zero element.

  // Iterate through the array.
  for (let i = 0; i < arr.length; i++) {
    // If the current element is not zero, swap it with the element at nonZeroIndex.
    if (arr[i] !== 0) {
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++; // Move the nonZeroIndex pointer to the next position.
    }
  }
};
