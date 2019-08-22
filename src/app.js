import BST from './tree/BinarySearchTree'

let numbers = [13, 27, 10, 8]

let tree = new BST()

numbers.forEach( key => tree.otherAdd(key))

console.log(tree)

let found = tree.search(8)

console.log(found.key)