import BST from './tree/BinarySearchTree'
import { printKey } from './tree/transversalOperations'

let numbers = [13, 27, 10, 8, 11, 40, 22, 30]

let tree = new BST()

numbers.forEach( key => tree.otherAdd(key) )

tree.breadthSearchFirst(printKey)