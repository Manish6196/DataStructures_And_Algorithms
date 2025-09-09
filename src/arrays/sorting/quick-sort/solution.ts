const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const n = arr[i];
    if (n > pivot) {
      right.push(n);
    } else {
      left.push(n);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([8, 20, -2, 4, -6]));

// Worst case - O(n^2)
// Average case - O(nlogn)
