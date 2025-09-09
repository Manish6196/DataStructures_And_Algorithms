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
      // Only perform the swap if the element at nonZeroIndex is zero to avoid redundant swaps.
      if (arr[nonZeroIndex] === 0) {
        [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      }
      nonZeroIndex++; // Move the nonZeroIndex pointer to the next position.
    }
  }
};

// Create a large array with a mix of zero and non-zero elements
const largeArray = Array.from({ length: 1000000 }, (_, i) =>
  i % 10 === 0 ? 0 : i
);

const startTime = performance.now();

moveZeroesToEnd(largeArray);

const endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);