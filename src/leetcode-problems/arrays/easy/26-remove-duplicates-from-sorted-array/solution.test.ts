import { removeDuplicates } from './solution';

describe('Remove Duplicates from Sorted Array', () => {
  it('should remove duplicates from a small array', () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums).toEqual([1, 2, '_']);
  });

  it('should remove duplicates from a larger array', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums).toEqual([0, 1, 2, 3, 4, '_', '_', '_', '_', '_']);
  });

  it('should handle an array with no duplicates', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with all duplicates', () => {
    const nums = [1, 1, 1, 1, 1];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums).toEqual([1, '_', '_', '_', '_']);
  });

  it('should handle an empty array', () => {
    const nums: number[] = [];
    const k = removeDuplicates(nums);
    expect(k).toBe(0);
    expect(nums).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const nums = [1];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums).toEqual([1]);
  });

  it('should handle an array with two different elements', () => {
    const nums = [1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums).toEqual([1, 2]);
  });

  it('should handle an array with two same elements', () => {
    const nums = [1, 1];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums).toEqual([1, '_']);
  });
});
