const findMatrixMaxAndIndex = (
  matrix: number[][]
): [number, number] | [null, null] => {
  const MatrixMax = (
    r: number,
    c: number,
    matrix: number[][]
  ): [number, number] | [null, null] => {
    if (r === matrix.length) {
      return [null, null];
    }
    if (c === (matrix[0]?.length || 0)) {
      return MatrixMax(r + 1, 0, matrix);
    }
    const res = MatrixMax(r, c + 1, matrix);
    const [prevMaxRowIndex, prevMaxColIndex] = res;
    if (
      prevMaxRowIndex === null ||
      matrix[r][c] >= matrix[prevMaxRowIndex][prevMaxColIndex]
    ) {
      return [r, c];
    }
    return res;
  };
  const finalResult = MatrixMax(0, 0, matrix);
  console.log(finalResult);
  return finalResult;
};

/*     0  1  2  c   // We will go left to right for r=0 each number at a time
    0 [2, 9, 6],    // Once c=3 (outofbound) then we will in move to next row with r + 1 and c = 0
    1 [8, 3, 7],    // Once r=2 (outofbound) we will return [null, null, null]
    r

    MatrixMax(0, 0, matrix);           [0, 1]  -->  [0, 1] <-- Ans
    MatrixMax(0, 1, matrix);           [0, 1]
    MatrixMax(0, 2, matrix);           [1, 0]
    MatrixMax(0, 3, matrix);           Skip
      MatrixMax(1, 0, matrix);         [1, 0]
      MatrixMax(1, 1, matrix);         [1, 3]
      MatrixMax(1, 2, matrix);         [1, 3]
      MatrixMax(1, 3, matrix);         Skip
        MatrixMax(2, 0, matrix);  -->  [null, null]  <-- [prevMaxRowIndex, prevMaxColIndex]
*/

findMatrixMaxAndIndex([[]]); // [null, null] --> [rowIndex, colIndex]
findMatrixMaxAndIndex([[5]]); // [0, 0] --> [rowIndex, colIndex]
findMatrixMaxAndIndex([
  [5, 6],
  [3, 7],
  [8, 2],
]);
// [2, 0] --> [rowIndex, colIndex]
findMatrixMaxAndIndex([
  [3, 4],
  [2, 1],
]);
// [0, 1] --> [rowIndex, colIndex]
findMatrixMaxAndIndex([
  [1, 2, 3],
  [4, 5, 6],
]);
// [1, 2] --> [rowIndex, colIndex]

export default findMatrixMaxAndIndex;
