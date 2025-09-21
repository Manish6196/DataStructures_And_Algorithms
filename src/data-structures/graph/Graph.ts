type AdjacencyList = Record<string, Set<string>>;

class Graph {
  private adjacencyList: AdjacencyList;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  removeVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) return;
    for (const adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1: string, vertex2: string) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  hasEdge(vertex1: string, vertex2: string) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex, " --> ", [...this.adjacencyList[vertex]]);
    }
  }
}

export default Graph;
