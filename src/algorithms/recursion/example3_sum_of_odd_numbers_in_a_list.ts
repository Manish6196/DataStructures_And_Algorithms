/*
 * Find the sum of all odd numbers in a list
 */
const findSumOfOddNumber = (list: number[]) => {
  const Sum = (index: number, list: number[]): number => {
    if (index === list.length) return 0;
    let val = 0;
    if (list[index] % 2 !== 0) {
      val = list[index];
    }
    return Sum(index + 1, list) + val;
  };
  return Sum(0, list);
};

console.log(findSumOfOddNumber([1, 2, 3])); // 4

/*
 *   Sum(0, [1, 2, 3])       +1  -->  4 - Ans
 *   Sum(1, [1, 2, 3])       +0
 *   Sum(2, [1, 2, 3])       +3
 *   Sum(3, [1, 2, 3])  -->  +0
 */

export default findSumOfOddNumber;
