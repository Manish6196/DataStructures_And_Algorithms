// Extra implementation for Queue
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

class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  private root: null | Node;

  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  private traverseAndPlace(node: Node, newNode: Node) {
    if (newNode.value === node.value) return;
    const side: keyof Node = newNode.value < node.value ? "left" : "right";
    node[side] === null
      ? (node[side] = newNode)
      : this.traverseAndPlace(node[side], newNode);
  }

  private traverseAndSearch(node: Node | null, value: number): boolean {
    if (!node) return false;
    if (node.value === value) return true;
    return value < node.value
      ? this.traverseAndSearch(node.left, value)
      : this.traverseAndSearch(node.right, value);
  }

  insert(value: number) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.traverseAndPlace(this.root as Node, newNode);
    }
  }

  has(value: number) {
    return this.traverseAndSearch(this.root, value);
  }

  private traversePreOrder(node: Node | null) {
    if (node) {
      console.log(node.value);
      this.traversePreOrder(node.left);
      this.traversePreOrder(node.right);
    }
  }

  preOrder() {
    this.traversePreOrder(this.root);
  }

  private traverseInOrder(node: Node | null) {
    if (node) {
      this.traverseInOrder(node.left);
      console.log(node.value);
      this.traverseInOrder(node.right);
    }
  }

  inOrder() {
    this.traverseInOrder(this.root);
  }

  private traversePostOrder(node: Node | null) {
    if (node) {
      this.traversePostOrder(node.left);
      this.traversePostOrder(node.right);
      console.log(node.value);
    }
  }

  postOrder() {
    this.traversePostOrder(this.root);
  }

  // BREADTH FIRST SEARCH (BFS)
  levelOrder() {
    if (this.isEmpty()) return;
    const queue = new Queue<Node>();
    queue.enqueue(this.root as Node);
    while (!queue.isEmpty()) {
      let curr = queue.dequeue();
      console.log(curr.value);
      if (curr.left) {
        queue.enqueue(curr.left);
      }
      if (curr.right) {
        queue.enqueue(curr.right);
      }
    }
  }

  private _min(node: Node): number {
    if (!node.left) {
      return node.value;
    } else {
      return this._min(node.left);
    }
  }

  min() {
    return this.root === null ? null : this._min(this.root);
  }

  private _max(node: Node): number {
    if (!node.right) {
      return node.value;
    } else {
      return this._max(node.right);
    }
  }

  max() {
    return this.root === null ? null : this._max(this.root);
  }

  deleteNode(node: Node | null, value: number): Node | null {
    if (node === null) {
      return node;
    }
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }
      node.value = this._min(node.right);
      node.right = this.deleteNode(node.right, node.value);
    }
    return node;
  }

  delete(value: number) {
    this.root = this.deleteNode(this.root, value);
  }
}

const bst = new BinarySearchTree();
// console.log("Is tree empty?", bst.isEmpty()); // true
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
//
//        (10)
//       /    \
//     (5)    (15)
//   /   \
// (3)   (7)
//

// console.log(bst.has(10)); // true
// console.log(bst.has(5)); // true
// console.log(bst.has(15)); // true
// console.log(bst.has(20)); // false

// DEPTH FIRST SEARCH (DFS)
// bst.preOrder(); // 10 5 3 7 15
// bst.inOrder(); // 3 5 7 10 15
// bst.postOrder(); // 3 7 5 15 10

// BREADTH FIRST SEARCH (BFS)
// bst.levelOrder(); // 10 5 15 3 7

// MIN & MAX
// console.log(bst.min()); // 3
// console.log(bst.max()); // 15

// DELETE
// bst.delete(3);
// bst.levelOrder(); // 10 5 15 7
