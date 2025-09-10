function factorialByLoop(n: number) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialByLoop(0)) // 1
console.log(factorialByLoop(1)) // 1
console.log(factorialByLoop(2)) // 2
console.log(factorialByLoop(3)) // 6
console.log(factorialByLoop(4)) // 24
console.log(factorialByLoop(5)) // 120