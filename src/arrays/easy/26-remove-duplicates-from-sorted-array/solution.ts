export const removeDuplicates = (nums: (number | '_')[]): number => {
  if (nums.length === 0) {
    return 0;
  }

  let left = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[left] === nums[i]) {
      nums[i] = '_';
    } else {
      left++;
      [nums[left], nums[i]] = [nums[i], nums[left]];
      count++;
    }
  }

  return count;
};
