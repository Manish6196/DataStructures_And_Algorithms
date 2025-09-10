function towerOfHanoi(
  n: number,
  fromRod: string, // A
  toRod: string, // C
  usingRod: string // B
) {
  // Shift last disk from A to C
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  } 
  // Shift (n - 1) disks from A to B, using C
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  // Shift (n - 1) disks from B to C, using A
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

// shift n disks from A to C, using B
towerOfHanoi(3, "A", "C", "B");
