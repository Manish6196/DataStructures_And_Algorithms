// Return a sorted list of values by sorting the list
// using the merge sort algorithm

const Merge = (left: number[], right: number[]): number[] => {
  const sorted: number[] = [];

  let l = 0;
  let r = 0;

  const addFromLeft = () => {
    sorted.push(left[l]);
    l++;
  };

  const addFromRight = () => {
    sorted.push(right[r]);
    r++;
  };

  while (l < left.length && r < right.length) {
    left[l] < right[r] ? addFromLeft() : addFromRight();
  }

  while (l < left.length) {
    addFromLeft();
  }

  while (r < right.length) {
    addFromRight();
  }

  return sorted;
};

const _MergeSort = (lo: number, hi: number, arr: number[]): number[] => {
  if (lo === hi) {
    return [arr[lo]];
  }
  const mid = Math.floor((lo + hi) / 2);
  const leftHalf = _MergeSort(lo, mid, arr);
  const rightHalf = _MergeSort(mid + 1, hi, arr);
  return Merge(leftHalf, rightHalf);
};

const MergeSort = (arr: number[]) => {
  if (!arr.length) return [];
  return _MergeSort(0, arr.length - 1, arr);
};

const result = MergeSort([7, 5, 3, 8, 10, 9, 4, 6]);
console.log(result);

export default MergeSort;
