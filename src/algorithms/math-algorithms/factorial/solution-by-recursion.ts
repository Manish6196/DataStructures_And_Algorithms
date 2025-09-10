function factorialByRecusrion(n: number): number {
  if (n <= 1) {
    return 1;
  }

  return n * factorialByRecusrion(n - 1);
}

console.log(factorialByRecusrion(0)); // 1
console.log(factorialByRecusrion(1)); // 1
console.log(factorialByRecusrion(2)); // 2
console.log(factorialByRecusrion(3)); // 6
console.log(factorialByRecusrion(4)); // 24
console.log(factorialByRecusrion(5)); // 120
