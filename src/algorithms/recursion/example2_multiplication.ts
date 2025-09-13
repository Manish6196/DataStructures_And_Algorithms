// Suppose you want to multiply two numbers: a * b = b + b + ...a times
const mul = (a: number, b: number): number => {
  if (a === 0) return 0;
  if (a < 0) {
    return mul(a + 1, b) - b;
  }
  return mul(a - 1, b) + b;
};

export default mul;

/*
  mul(-3, 2)   mul(-3, -2)   mul(3, -2)   mul(3, 2)
  mul(-2, 2)   mul(-2, -2)   mul(2, -2)   mul(2, 2)
  mul(-1, 2)   mul(-1, -2)   mul(1, -2)   mul(1, 2)
  mul(0, 2)    mul(0, -2)    mul(0, -2)   mul(0, 2)
*/
