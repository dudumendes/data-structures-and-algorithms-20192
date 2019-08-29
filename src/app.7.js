import BST from './tree/TreeMenu'
import { printMenu } from './tree/transversalOperations'

let menuItems = [ {key: 13, title: "UNI7"} ,
                {key: 27, title: "Pos"},
                {key: 10, title: "Graduacao"},
                {key: 8, title: "Direito"},
                {key: 11, title: "Sistemas de Informacao"},
                {key: 40, title: "Pos em BI"},
                {key: 22, title: "Pos em Psicologia"}]

let tree = new BST()

menuItems.forEach( tuple => tree.otherAdd(tuple.key, tuple.title))

tree.preOrder(printMenu)