class Queue<N> {
  private items: Record<string, N>;
  private front: number;
  private rear: number;

  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element: N) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    console.log(this.items);
  }
}

export default Queue;
