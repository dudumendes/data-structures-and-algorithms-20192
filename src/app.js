import Graph from './graph/list/Graph'

let graph = new Graph()

let u = graph.addVertex("u")
let v = graph.addVertex("v")
let w = graph.addVertex("w")
let z = graph.addVertex("z")

let e = graph.addEdge(u, v, "e")
let f = graph.addEdge(v, w, "f")
let g = graph.addEdge(u, w, "g")
let i = graph.addEdge(w, z, "i")

console.log(graph.vertices)
console.log(graph.edges)