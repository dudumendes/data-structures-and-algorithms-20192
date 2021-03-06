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

    addEdge(origin, destination, element = null) {
        let edge = new Edge(origin, destination, element)
        origin.addEdge(edge)
        destination.addEdge(edge)

        return edge
    }

    adjacencyList() {
        this._vertices.forEach( vertex => console.log(vertex.adjacencyList()) )
    }
}