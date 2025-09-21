function sortColors(nums: number[]): void {
  let l = 0;
  let r = nums.length - 1;
  let i = l;

  const swap = (x: number, y: number) => {
    const temp = nums[x];
    nums[x] = nums[y];
    nums[y] = temp;
  };

  while (i <= r) {
    if (nums[i] === 0) {
      swap(l, i);
      l++;
    } else if (nums[i] === 2) {
      swap(i, r);
      r--;
      i--;
    }
    i++;
  }
}

const colors = [...generateLongArray(10, 3)];
console.log("before:", colors);
console.time("peformace");
sortColors(colors);
console.timeEnd("peformace");
console.log("after:", colors);

export default null;

function generateLongArray(length: number, maxVal: number) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * maxVal)); // Generates random integers
  }
  return arr;
}
