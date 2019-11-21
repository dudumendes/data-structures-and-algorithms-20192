import Vertex from '../Vertex'
import Edge from '../Edge'

export default class Graph {
    constructor() {
        this._outgoing = new Map()
    }

    addVertex(element) {
        let vertex = new Vertex(element)
        this._outgoing(vertex, new Map())
        return vertex
    }

    addEdge(origin, destination, element = null) {
        let edge = new Edge(origin, destination, element)
        this._outgoing.get(origin).set(destination, edge)
        this._outgoing.get(destination).set(origin, edge)

        // return edge
    }

    adjacencyList() {
        this._vertices.forEach( vertex => console.log(vertex.adjacencyList()) )
    }
}