// Devide and Conquer: device in three parts and find max

const min = (i: number, j: number, list: number[]): number => {
  if (j - i === 2) {
    return Math.min(list[i], list[i + 1], list[i + 2]);
  }
  if (j - i === 1) {
    return Math.min(list[i], list[i + 1]);
  }
  if (i === j) {
    return list[i];
  }

  const l1 = Math.floor((i + j) * (1 / 3));
  const l2 = Math.floor((i + j) * (2 / 3));

  const leftMax = min(i, l1, list);
  const midMax = min(l1 + 1, l2, list);
  const rightMax = min(l2 + 1, j, list);

  return Math.min(leftMax, midMax, rightMax);
};

const findMinDeviceNConquer = (list: number[]) => {
  if (!list.length) return null;
  return min(0, list.length - 1, list);
};

console.log(findMinDeviceNConquer([2, 1, 3, -4, 2])); // -4 <-- min in the list

export default findMinDeviceNConquer;
