import BST from './tree/BinarySearchTree'
import  {printIndetendKey} from './tree/transversalOperations'

import { createArray, linearSearch } from './util/array'

console.time('createArray');
let numbers = createArray(1000000)
console.timeEnd('createArray');

console.time('createTree');
let tree = new BST()
numbers.forEach(number => tree.otherAdd(number))
console.timeEnd('createTree');

//tree.preOrder(printIndetendKey)

console.time("search 989999 tree")
tree.search(989999)
console.timeEnd("search 989999 tree")

console.time("linearSearch 989999 linear")
linearSearch(numbers, 989999)
console.timeEnd("linearSearch 989999 linear")
