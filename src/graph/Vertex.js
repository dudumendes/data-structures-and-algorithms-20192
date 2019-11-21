export default class Vertex {
    constructor(element) {
        this._element = element
        this._outgoing = []
    }

    addEdge(edge) {
        this._outgoing.push(edge)
    }

    get element () {
        return this._element
    }

    toString() {
        return this._element
    }

    adjacencyList() {
        let list = "" + this

        this._outgoing.forEach( edge => list += ` -> ${edge.element}`)

        return list
    }
}