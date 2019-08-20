import Node from "./Node"

export default class BinarySearchTree {
    constructor() {
        this._root = null
    }

    add(key) {
        if (this._root == null) {
           this._root = new Node(key) 
        } else {
            this.addNode(this._root, key)
        }
    }

    addNode(node, key) {
        if (key < node.key) {
            node.leftChild = new Node(key)
        } else {
            node.rightChild = new Node(key)
        }
    }
}