import Vertex from '../Vertex'
import Edge from '../Edge'

export default class Graph {
    constructor() {
        this._vertices = []
        this._edges = []
    }

    addVertex(element) {
        let vertex = new Vertex(element)
        this._vertices.push(vertex)
        return vertex
    }

    addEdge(origin, destination, element = null) {
        let edge = new Edge(origin, destination, element)
        this._edges.push(edge)
        return edge
    }

    get vertices() {
        return this._vertices
    }

    get edges() {
        return this._edges
    }
}