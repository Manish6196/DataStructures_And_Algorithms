import { moveZeroesToEnd } from './solution';

describe('Move Zeroes To End', () => {
  it('should move zeroes to the end of the array with mixed elements', () => {
    const arr = [0, 1, 0, 3, 12];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([1, 3, 12, 0, 0]);
  });

  it('should handle an array with all zeroes', () => {
    const arr = [0, 0, 0, 0, 0];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([0, 0, 0, 0, 0]);
  });

  it('should handle an array with no zeroes', () => {
    const arr = [1, 2, 3, 4, 5];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with zeroes at the beginning', () => {
    const arr = [0, 1, 0, 3, 0, 12];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([1, 3, 12, 0, 0, 0]);
  });

  it('should handle an array with one non-zero element', () => {
    const arr = [1, 0, 0, 0, 0, 0];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([1, 0, 0, 0, 0, 0]);
  });

  it('should handle an array with one non-zero element at the end', () => {
    const arr = [0, 0, 0, 0, 0, 1];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([1, 0, 0, 0, 0, 0]);
  });

  it('should handle an array with alternating zeroes and non-zeroes', () => {
    const arr = [1, 0, 2, 0, 3, 0];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([1, 2, 3, 0, 0, 0]);
  });

  it('should handle an empty array', () => {
    const arr: number[] = [];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([]);
  });

  it('should handle an array with one element being zero', () => {
    const arr = [0];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([0]);
  });

  it('should handle an array with one non-zero element', () => {
    const arr = [1];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([1]);
  });

  it('should handle an array with all elements being the same non-zero number', () => {
    const arr = [2, 2, 2, 2, 2];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([2, 2, 2, 2, 2]);
  });

  it('should handle an array with zeroes at the end', () => {
    const arr = [1, 2, 3, 0, 0];
    moveZeroesToEnd(arr);
    expect(arr).toEqual([1, 2, 3, 0, 0]);
  });
});
