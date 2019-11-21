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

    opposite(vertex) {
        if (vertex === this._origin) { 
            return this._destination
        } else {
            return this._origin
        }
    }
}