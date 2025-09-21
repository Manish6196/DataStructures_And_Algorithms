class AVLNode {
  value: string;
  left: AVLNode | null;
  right: AVLNode | null;
  height: number;

  constructor(value: string) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  private root: AVLNode | null;

  constructor() {
    this.root = null;
  }

  insert(val: string): void {
    if (this.root === null) {
      this.root = new AVLNode(val);
      return;
    }
    this._insert(this.root, val);
  }

  private getHeight(node: AVLNode | null): number {
    if (!node) return 0;
    return node.height;
  }

  private getBalance(node: AVLNode | null): number {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  private rotateRight(y: AVLNode) {
    console.log("Rotate right on node", y.value);

    // Capture left node (x) and it's right node (t2)
    const x = y.left as AVLNode;
    const t2 = x.right;

    // A single right rotation
    x.right = y;
    y.left = t2;

    // Calculate new heights after rotation
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    // Return new center node
    return x;
  }

  private rotateLeft(x: AVLNode) {
    console.log("Rotate left on node", x.value);

    // Capture right node (y) and it's left node (t2)
    const y = x.right as AVLNode;
    const t2 = y.left;

    // A single left rotation
    y.left = x;
    x.right = t2;

    // Calculate new heights after rotation
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    // Return new center node
    return y;
  }

  private _insert(node: AVLNode, val: string): void {
    if (!node) return;

    if (val < node.value) {
      if (!node.left) {
        node.left = new AVLNode(val);
      } else {
        this._insert(node.left, val);
        return;
      }
    } else if (val > node.value) {
      if (!node.right) {
        node.right = new AVLNode(val);
      } else {
        this._insert(node.right, val);
        return;
      }
    } else {
      return;
    }

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    const balance = this.getBalance(node);
    const leftBalance = this.getBalance(node.left);
    const rightBalance = this.getBalance(node.right);

    // Left Left Case
    if (balance > 1 && leftBalance >= 0) {
      this.rotateRight(node);
      return;
    }

    // Left Right Case
    if (balance > 1 && leftBalance < 0) {
      node.left = this.rotateLeft(node.left as AVLNode);
      this.rotateRight(node);
      return;
    }

    // Right Right Case
    if (balance < -1 && rightBalance <= 0) {
      this.rotateLeft(node);
      return;
    }

    // Right left Case
    if (balance < -1 && rightBalance > 0) {
      node.right = this.rotateRight(node.right as AVLNode);
      this.rotateLeft(node);
      return;
    }
  }

  // Find node with minimum value
  private minValueNode(node: AVLNode) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // Delete a node
  private _delete(node: AVLNode | null, val: string) {
    if (!node) return node;

    // BST delete
    if (val < node.value) {
      node.left = this._delete(node.left, val);
    } else if (val > node.value) {
      node.right = this._delete(node.right, val);
    } else {
      // Node with only one child or no child
      if (!node.left) {
        const temp = node.right;
        node = null;
        return temp;
      } else if (!node.right) {
        const temp = node.left;
        node = null;
        return temp;
      }

      // Node with two children: get inorder successor
      const temp = this.minValueNode(node.right);
      node.value = temp.value;

      // Delete the inorder successor
      node.right = this._delete(node.right, temp.value);
    }

    if (!node) return node;

    // Update height
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // Get balance factor
    const balance = this.getBalance(node);

    // Balance the node
    // Left Left Case
    if (balance > 1 && this.getBalance(node.left) >= 0) {
      return this.rotateRight(node);
    }

    // Left Right Case
    if (balance > 1 && this.getBalance(node.left) < 0) {
      node.left = this.rotateLeft(node.left as AVLNode);
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balance < -1 && this.getBalance(node.right) <= 0) {
      return this.rotateLeft(node);
    }

    // Right Left Case
    if (balance < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rotateRight(node.right as AVLNode);
      return this.rotateLeft(node);
    }

    return node;
  }

  delete(val: string) {
    return this._delete(this.root, val);
  }

  private _inOrderTraversal(node: AVLNode | null) {
    if (!node) return;
    this._inOrderTraversal(node.left);
    console.log(node.value);
    this._inOrderTraversal(node.right);
  }

  inOrderTraversal() {
    this._inOrderTraversal(this.root);
  }
}

export default AVLTree;
