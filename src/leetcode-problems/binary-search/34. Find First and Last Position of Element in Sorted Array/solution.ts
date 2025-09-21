import binarySearch from "../../../algorithms/search-algorithms/binary-search/solution";

function searchRange(nums: number[], target: number): number[] {
  const targetIndex = binarySearch(nums, target);
  if (targetIndex === -1) return [-1, -1];
  let l = targetIndex;
  while (nums[l] === target) {
    l--;
  }
  let r = targetIndex;
  while (nums[r] === target) {
    r++;
  }
  return [l + 1, r - 1];
}

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
// console.log(searchRange([], 0)); // [-1, -1]

export default searchRange;
