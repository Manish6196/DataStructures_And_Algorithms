function search(nums: number[], target: number) {
  // Using binary search to achieve O(log n) time complexity
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const middle_index = Math.floor((l + r) / 2);
    const middle_number = nums[middle_index];

    // If target is in the nums -> Return index
    if (middle_number === target) {
      return middle_index;
    }

    const searchLeftHalf = () => (r = middle_index - 1); // Search on l and (middle_index - 1)
    const searchRightHalf = () => (l = middle_index + 1); // Search on (middle_index + 1) and r

    if (middle_number > nums[l]) {
      if (target < middle_number && target >= nums[l]) {
        searchLeftHalf();
      } else {
        searchRightHalf();
      }
    } else {
      if (target > middle_number && target <= nums[r]) {
        searchRightHalf();
      } else {
        searchLeftHalf();
      }
    }
  }

  // If target is not in the nums -> Return -1
  return -1;
}

console.log(search([4, 5, 6, 7, 8, 9, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 8, 9, 0, 1, 2], 5));
console.log(search([7, 8, 9, 0, 1, 2, 4, 5, 6], 0));
console.log(search([7, 8, 9, 0, 1, 2, 4, 5, 6], 5));

export default null;
