function climbingStaircaseByRecursion(n: number): number {
  if (n < 1) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  return (
    climbingStaircaseByRecursion(n - 1) + climbingStaircaseByRecursion(n - 2)
  );
}

console.log(climbingStaircaseByRecursion(1)); // 1 - [1]
console.log(climbingStaircaseByRecursion(2)); // 2 - [1, 1] [2]
console.log(climbingStaircaseByRecursion(3)); // 3 - [1, 1, 1] [1, 2] [2, 1]
console.log(climbingStaircaseByRecursion(4)); // 5 - [1, 1, 1, 1] [1, 1, 2] [1, 2, 1] [2, 1, 1] [2, 2]
console.log(climbingStaircaseByRecursion(5)); // 8 - ...
console.log(climbingStaircaseByRecursion(6)); // 13 - ...
