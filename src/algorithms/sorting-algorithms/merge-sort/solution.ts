const merge = <T>(arr1: T[], arr2: T[]) => {
  const result = [];
  let i1 = 0;
  let i2 = 0;

  while (i1 < arr1.length && i2 < arr2.length) {
    const n1 = arr1[i1];
    const n2 = arr2[i2];

    if (n1 < n2) {
      result.push(n1);
      i1++;
    } else {
      result.push(n2);
      i2++;
    }
  }

  while (i1 < arr1.length) {
    result.push(arr1[i1]);
    i1++;
  }

  while (i2 < arr2.length) {
    result.push(arr2[i2]);
    i2++;
  }

  return result;
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([8, 20, -2, 4, -6]));

// Worst case - O(nlogn)
// Average case - O(nlogn)

export default mergeSort;
