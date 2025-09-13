const findMaxAndIndex = (list: number[]) => {
  const Max = (i: number, list: number[]): [number, number] | [null, null] => {
    if (i === list.length) {
      return [null, null];
    }
    const [prevMax, prevMaxIndex] = Max(i + 1, list);
    if (prevMax === null || list[i] >= prevMax) {
      return [list[i], i];
    }
    return [prevMax, prevMaxIndex];
  };
  return Max(0, list);
};

console.log(findMaxAndIndex([2, 1, 3, -4, 2])); // [3, 2] --> [number, index]

export default findMaxAndIndex;
