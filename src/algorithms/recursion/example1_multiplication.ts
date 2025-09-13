// Suppose you want to multiply two numbers: a * b
const mul = (a: number, b: number): number => {
  if (a === 0) return 0;
  const m = mul(a - 1, b);
  return m + b;
};

export default mul;

/* First Up to Donw then Down to Up
  mul(4, 3)    +3       12 <-- Ans
  mul(3, 3)    +3        9
  mul(2, 3)    +3        6
  mul(1, 3)    +3        3
  mul(0, 3)    +0  -->   0
*/
