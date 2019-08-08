import Node from './tree/Node'

let root = new Node(50)

root.leftChild = new Node(20)
root.leftChild.parent = root

root.rightChild = new Node(100)
root.rightChild.parent = root

root.leftChild.rightChild = new Node(30)

console.log(root)