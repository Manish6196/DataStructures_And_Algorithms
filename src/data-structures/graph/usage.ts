import Graph from "./Graph";

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("B", "D");
graph.addEdge("A", "D");

graph.display();

console.log(graph.hasEdge("A", "B"));
console.log(graph.hasEdge("A", "C"));

// graph.removeEdge("A", "B");
// console.log(graph.hasEdge("A", "B"));
// graph.display();

graph.removeVertex("C");
graph.display();
