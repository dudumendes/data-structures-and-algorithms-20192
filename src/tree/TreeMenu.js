import BST from './BinarySearchTree'
import Node from "./NodeMenu"

export default class TreeMenu extends BST {

    otherAdd(key, title) {
        if (this._root == null) {
           this._root = new Node(key, title) 
        } else {
            this.otherAddNode(this._root, key, title)
        }
    }

    otherAddNode(node, key, title) {
        let child = (key < node.key) ? "leftChild" : "rightChild"

        if (node[child]) {
            this.otherAddNode(node[child], key, title)                
        } else {
            node[child] = new Node(key, title, node)
        }
    }
}