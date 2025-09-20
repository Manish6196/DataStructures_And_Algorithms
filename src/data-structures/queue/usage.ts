import Queue from "./Queue";

// Create a queue
const myQueue = new Queue();

myQueue.enqueue("A");
myQueue.enqueue("B");
myQueue.enqueue("C");

myQueue.print();

console.log("Dequeue: ", myQueue.dequeue()); // A

console.log("Peek: ", myQueue.peek()); // B

console.log("isEmpty: ", myQueue.isEmpty()); // false

console.log("Size: ", myQueue.size()); // 2

export default null;
