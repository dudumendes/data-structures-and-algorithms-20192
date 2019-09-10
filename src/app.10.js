import BST from './tree/BinarySearchTree'
import { printIndetendKey } from './tree/transversalOperations'

let numbers = [13, 27, 10, 8]

let tree = new BST()

numbers.forEach( key => tree.otherAdd(key) )

tree.preOrder(printIndetendKey)

console.log("Removing 27")
tree.remove(27)

tree.preOrder(printIndetendKey)

console.log("Removing 8")
tree.remove(8)

tree.preOrder(printIndetendKey)

console.log("Removing 10")
tree.remove(10)

tree.preOrder(printIndetendKey)

console.log("Removing 13")
tree.remove(13)

tree.preOrder(printIndetendKey)