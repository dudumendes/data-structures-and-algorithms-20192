import Node from './Node'

export default class NodeMenu extends Node {
    constructor(key, title = "", parent = null) {
        super(key, parent)
        this.title = title
    }
}