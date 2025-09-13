// Devide and Conquer: device in two parts and find max

const Max = (i: number, j: number, list: number[]): number => {
  if (i === j) {
    return list[i];
  }
  const mid = Math.floor((i + j) / 2);
  const leftMax = Max(i, mid, list);
  const rightMax = Max(mid + 1, j, list);
  return leftMax > rightMax ? leftMax : rightMax;
};

const findMaxDeviceNConquer = (list: number[]) => {
  if (!list.length) return null;
  return Max(0, list.length - 1, list);
};

console.log(findMaxDeviceNConquer([2, 1, 3, -4, 2])); // 3 <-- max in the list

export default findMaxDeviceNConquer;
