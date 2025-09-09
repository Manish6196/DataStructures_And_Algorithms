function fibonacciByLoop (n: number) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  const result = [0, 1];

  for (let i = 2; i <= n - 1; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

console.log(fibonacciByLoop(2)) // [0, 1]
console.log(fibonacciByLoop(3)) // [0, 1, 1]
console.log(fibonacciByLoop(7)) // [0, 1, 1, 2, 3, 5, 8]

// Big-O - O(n) Good
