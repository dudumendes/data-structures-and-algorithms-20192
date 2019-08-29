import BST from './tree/BinarySearchTree'
import { printKey } from './tree/transversalOperations'

let numbers = [13, 27, 10, 8]

let tree = new BST()

numbers.forEach( key => tree.otherAdd(key))

tree.preOrder(printKey)