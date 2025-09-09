function linearSearch(arr: number[], t: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([4, 5, 6, 7, 2, 4], 2)); // 4
console.log(linearSearch([4, 5, 6, 7, 2, 4], 1)); // -1
console.log(linearSearch([4, 5, 6, 7, 2, 4], 5)); // 1
