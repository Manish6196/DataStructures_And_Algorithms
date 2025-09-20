const selectionSort = (arr: number[]) => {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

console.log(selectionSort([8, 20, 4, -2, 4, -6]));

// Big-O - O(n^2)

export default selectionSort;
