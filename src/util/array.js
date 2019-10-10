export function createArray(length) {
    let array = []
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (length)))
    }
    return array
} 

export function linearSearch(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == key) {
            return key
        }
    }
}