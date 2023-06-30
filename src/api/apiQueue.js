let queue = []

export function getItem() {
    if (queue.length !== 0) return queue[0]
    return null
}

export function setItem(apiCall) {
    queue.push(apiCall)
}