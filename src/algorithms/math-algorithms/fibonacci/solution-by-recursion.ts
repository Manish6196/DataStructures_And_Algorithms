function fibonacciByRecursion(n: number): number {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacciByRecursion(n - 1) + fibonacciByRecursion(n - 2);
}

// [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciByRecursion(0)); // 0th element is 0
console.log(fibonacciByRecursion(1)); // 1st element is 1
console.log(fibonacciByRecursion(6)); // 6th element is 8
console.log(fibonacciByRecursion(7)); // 7th element is 13

// Big-O - O(2^n) Terrible
