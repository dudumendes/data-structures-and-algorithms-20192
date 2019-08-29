export const printKey = node => console.log(node.key)

export const printEvenKey = node => {
    if (node.key % 2 == 0) {
        console.log(node.key)
    }
}

export const printIndetendKey = node => {
    let buffer = ""

    for(let i = 0; i < node.depth(); i++) {
        buffer += "- "
    }

    buffer += node.key
    console.log(buffer)
}

export const printMenu = node => {
    let buffer = ""

    for(let i = 0; i < node.depth(); i++) {
        buffer += "- "
    }

    buffer += node.title
    console.log(buffer)
}