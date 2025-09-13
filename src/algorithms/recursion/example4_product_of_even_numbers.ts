// Find product of all even numbers in a list
// Where numbers can be positive, zero, negative

const mul = (i: number, list: number[]): number | null => {
  if (i === list.length) return null;
  const product = mul(i + 1, list);
  const thisNumber = list[i];
  if (thisNumber % 2 !== 0) {
    // If this number is Odd return product of down calls
    return product;
  }
  if (product === null) {
    // If this number is Even but product of down calls is null then return this number
    return thisNumber;
  }
  // If this number is Even have valid product of down calls then return (this number * product)
  return thisNumber * product;
};

const productOfEvenNumbers = (list: number[]) => {
  const product = mul(0, list);
  if (product === null) {
    return 0;
  } else {
    return product;
  }
};

const result = productOfEvenNumbers([1, 3, 7]);
console.log(result); // -16

export default productOfEvenNumbers;
