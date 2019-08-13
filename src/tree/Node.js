class Node {
    constructor(key) {
        this.parent = null
        this.leftChild = null
        this.rightChild = null
        this.key = key
    }

    depth() {

    }

    height() {

    }

    isRoot() {
        return this.parent == null
    }

    isLeaf() {
        return !this.leftChild && !this.rightChild
    }

    hasRightChild() {
        return this.rightChild != null
    }

    hasLeftChild() {
        return this.leftChild != null
    }

    hasBothChildren() {
        return this.leftChild && this.rightChild
    }

    isLeftChild() {
        return this.parent && this.parent.leftChild === this 
    }

    isRightChild() {
        return this.parent && this.parent.rightChild === this

    }
}

export default Node