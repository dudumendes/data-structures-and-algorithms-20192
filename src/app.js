import BST from './tree/BinarySearchTree'

let numbers = [13, 27, 10, 8]

let tree = new BST()

numbers.forEach( key => tree.add(key))

console.log(tree)