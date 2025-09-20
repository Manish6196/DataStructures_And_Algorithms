import Stack from "./Stack";

// Create a stack
const myStack = new Stack<string>();

myStack.push("A");
myStack.push("B");
myStack.push("C");

myStack.print();

console.log("Pop: ", myStack.pop()); // C

console.log("Peek: ", myStack.peek()); // B

console.log("isEmpty: ", myStack.isEmpty()); // false

console.log("Size: ", myStack.size()); // 2

export default null;
