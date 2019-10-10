import Vertex from '../Vertex'
import Edge from '../Edge'

export default class Graph {
    constructor() {
        this._vertices = []
    }

    addVertex(element) {
        let vertex = new Vertex(element)
        this._vertices.push(vertex)
        return vertex
    }

    addEdge(origin, destination, element) {
        let edge = new Edge(origin, destination, element)
        origin.addEdge(edge)
        destination.addEdge(edge)

        return edge
    }
}