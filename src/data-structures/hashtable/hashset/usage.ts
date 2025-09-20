import HashSet from "./HashSet";

// Creating the Hash Set from the simulation
const hash_set = new HashSet(10);

hash_set.add("Charlotte");
hash_set.add("Thomas");
hash_set.add("Jens");
hash_set.add("Peter");
hash_set.add("Lisa");
hash_set.add("Adele");
hash_set.add("Michaela");
hash_set.add("Bob");

hash_set.print();

console.log("\n'Peter' is in the set:", hash_set.has("Peter"));
console.log("Removing 'Peter'");
hash_set.delete("Peter");
console.log("'Peter' is in the set:", hash_set.has("Peter"));
console.log("'Adele' has hash code:", hash_set.hash("Adele"));
