import BST from './tree/BinarySearchTree'
import { printIndetendKey } from './tree/transversalOperations'

let numbers = [30, 40, 15, 12, 10, 20, 14]

let tree = new BST()

numbers.forEach( key => tree.otherAdd(key) )

tree.preOrder(printIndetendKey)

console.log("Removing 15")
tree.remove(15)

tree.preOrder(printIndetendKey)
