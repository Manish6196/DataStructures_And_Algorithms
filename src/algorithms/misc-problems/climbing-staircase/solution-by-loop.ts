function climbingStaircaseByLoop(n: number) {
  if (n < 1) return 0;
  if (n === 1) return 1;

  let n1 = 1;
  let n2 = 2;

  for (let i = 3; i <= n; i++) {
    const temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }

  return n2;
}

console.log(climbingStaircaseByLoop(1)); // 1 - [1]
console.log(climbingStaircaseByLoop(2)); // 2 - [1, 1] [2]
console.log(climbingStaircaseByLoop(3)); // 3 - [1, 1, 1] [1, 2] [2, 1]
console.log(climbingStaircaseByLoop(4)); // 5 - [1, 1, 1, 1] [1, 1, 2] [1, 2, 1] [2, 1, 1] [2, 2]
console.log(climbingStaircaseByLoop(5)); // 8 - ...
console.log(climbingStaircaseByLoop(6)); // 13 - ...
