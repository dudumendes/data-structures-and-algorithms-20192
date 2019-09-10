import BST from './tree/BinarySearchTree'
import { printIndetendKey } from './tree/transversalOperations'

let numbers = [13, 27, 30, 33]

let tree = new BST()

numbers.forEach( key => tree.otherAdd(key) )

tree.preOrder(printIndetendKey)

console.log("Removing 13")
tree.remove(13)

tree.preOrder(printIndetendKey)
