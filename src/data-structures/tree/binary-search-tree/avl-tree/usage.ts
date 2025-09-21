import AVLTree from "./AVLTree";

const LETTERS = ["C", "B", "E", "A", "D", "H", "G", "F"];

const myAVLTree = new AVLTree();

for (const letter of LETTERS) {
  myAVLTree.insert(letter);
}

myAVLTree.delete("G");

myAVLTree.inOrderTraversal();

export default null;
