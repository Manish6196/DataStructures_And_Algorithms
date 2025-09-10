function binarySearchByRecursion(arr: number[], target: number) {
  return search(arr, target, 0, arr.length - 1);
}

const search = (
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  const middleIndex = Math.floor((rightIndex + leftIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
};

console.log(binarySearchByRecursion([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearchByRecursion([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearchByRecursion([-5, 2, 4, 6, 10], 20)); // -1
