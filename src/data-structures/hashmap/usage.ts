import HashMap from "./HashMap";

// Creating the Hash Map from the simulation
const hash_map = new HashMap(10);

// Adding some entries
hash_map.set("123-4567", "Charlotte");
hash_map.set("123-4568", "Thomas");
hash_map.set("123-4569", "Jens");
hash_map.set("123-4570", "Peter");
hash_map.set("123-4571", "Lisa");
hash_map.set("123-4672", "Adele");
hash_map.set("123-4573", "Michaela");
hash_map.set("123-6574", "Bob");

hash_map.print();

// Demonstrating retrieval
console.log("Name associated with '123-4570':", hash_map.get("123-4570"));

console.log("Updating the name for '123-4570' to 'James'");
hash_map.set("123-4570", "James");

// Checking if Peter is still there
console.log("Name associated with '123-4570':", hash_map.get("123-4570"));

export default null;
