import BST from './tree/BinarySearchTree'
import { printIndetendKey } from './tree/transversalOperations'

let numbers = [13, 27, 10, 8, 11, 40, 22, 30]

let tree = new BST()

numbers.forEach( key => tree.otherAdd(key) )

tree.preOrder(printIndetendKey)

console.log("Removing 30")
tree.remove(30)

tree.preOrder(printIndetendKey)

console.log("Removing 8")
tree.remove(8)

tree.preOrder(printIndetendKey)
