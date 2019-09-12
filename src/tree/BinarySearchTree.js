import Node from "./Node"

export default class BinarySearchTree {
    constructor() {
        this._root = null
    }

    add(key) {
        if (this._root == null) {
            this._root = new Node(key)
        } else {
            this.addNode(this._root, key)
        }
    }

    addNode(node, key) {
        if (key < node.key) {
            if (node.hasLeftChild()) {
                this.addNode(node.leftChild, key)
            } else {
                node.leftChild = new Node(key)
                node.leftChild.parent = node
            }
        } else {
            if (node.hasRightChild()) {
                this.addNode(node.rightChild, key)
            } else {
                node.rightChild = new Node(key)
                node.rightChild.parent = node
            }
        }
    }

    otherAdd(key) {
        if (this._root == null) {
            this._root = new Node(key)
        } else {
            this.otherAddNode(this._root, key)
        }
    }

    otherAddNode(node, key) {
        let child = (key < node.key) ? "leftChild" : "rightChild"

        if (node[child]) {
            this.otherAddNode(node[child], key)
        } else {
            node[child] = new Node(key, node)
        }
    }

    search(key) {
        return this.searchNode(this._root, key)
    }

    searchNode(node, key) {
        if (!node) return null

        if (key < node.key)
            return this.searchNode(node.leftChild, key)

        if (key > node.key)
            return this.searchNode(node.rightChild, key)

        return node
    }

    preOrder(operation) {
        this.preOrderNode(this._root, operation)
    }

    preOrderNode(node, operation) {
        if (node != null) {
            operation(node)
            this.preOrderNode(node.leftChild, operation)
            this.preOrderNode(node.rightChild, operation)
        }
    }

    inOrder() {

    }

    inOrderNode(node) {

    }

    posOrder() {

    }

    posOrderNode() {

    }

    sum() {
        return this.sumNodes(this._root)
    }

    sumNodes(node) {
        let sum = 0

        if (node) {
            sum = sum + node.key
            sum += this.sumNodes(node.leftChild)
            sum += this.sumNodes(node.rightChild)
        }

        return sum
    }

    size() {

    }

    minimum() {
        return this.minimumNode(this._root)
    }

    minimumNode(node) {
        let minimum = node

        if (minimum) {
            while (minimum.hasLeftChild()) {
                minimum = minimum.leftChild
            }
        }

        return minimum
    }

    maximum() {
        return this.maximumNode(this._root)
    }

    maximumNode(node) {
        let maximum = node

        if (maximum) {
            while (maximum.hasRightChild()) {
                maximum = maximum.rightChild
            }
        }

        return maximum
    }

    breadthSearchFirst(operation) {
        let queue = []
        queue.push(this._root)

        while (queue.length > 0) {
            let node = queue.shift()
            operation(node)

            if (node.leftChild) {
                queue.push(node.leftChild)
            }
            if (node.rightChild) {
                queue.push(node.rightChild)
            }
        }
    }

    remove(key) {
        let found = this.search(key)

        if (found) {
            if (found.isLeaf()) {
                if (found.isRoot()) {
                    this._root = null
                } else {
                    let child = (found.isLeftChild()) ? 'leftChild' : 'rightChild'
                    found.parent[child] = null
                    found.parent = null
                }
            } else if (found.hasBothChildren()) {
                
                let substitute = this.maximumNode(found.leftChild)
                this.remove(substitute.key)
                
                substitute.leftChild = found.leftChild
                if (substitute.leftChild) 
                    substitute.leftChild.parent = substitute
                found.leftChild = null

                substitute.rightChild = found.rightChild
                if (substitute.rightChild) 
                    substitute.rightChild.parent = substitute
                found.rightChild = null

                substitute.parent = found.parent

                if (found.isRoot()) {
                    this._root = substitute
                } else {
                    if (found.isLeftChild()) {
                        found.parent.leftChild = substitute
                    } else {
                        found.parent.rightChild = substitute
                    }
                    found.parent = null                    
                }

            } else { //1 child only
                let child = (found.hasLeftChild()) ? "leftChild" : "rightChild"

                if (found.isRoot()) {
                    this._root = this._root[child]
                    this._root.parent = null
                    found[child] = null
                } else {
                    let isChild = found.isLeftChild() ? "leftChild" : "rightChild"
                    found[child].parent = found.parent
                    found.parent[isChild] = found[child]

                    found.parent = null
                    found[child] = null
                }
            }
        }
    }
}

