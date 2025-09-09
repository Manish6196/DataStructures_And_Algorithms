const insertionSort = (arr: number[]) => {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    const numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }

  return arr;
};

console.log(insertionSort([8, 20, -2, 4, -6]));

// Big-O - O(n^2)
