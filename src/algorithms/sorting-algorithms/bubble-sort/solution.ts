const bubbleSort = (arr: number[]) => {
  if (arr.length <= 1) {
    return arr;
  }

  let isSwapped = true;

  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  }

  return arr;
};

console.log(bubbleSort([8, 20, -2, 4, -6]));

// Big-O - O(n^2)
