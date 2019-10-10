export default class Edge {
    constructor(origin, destination, element = null) {
        this._origin = origin
        this._destination = destination
        this._element = element
    }

    get element() {
        return this._element
    }

    endpoints() {
        return [origin, destination]
    }

    opposite(v) {
        //return the opposite vertex to v
    }
}