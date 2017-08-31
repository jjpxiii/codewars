function josephus(items, k) {
    var result = []
    var toKill = (k - 1) % items.length
    while (items.length > 1) {
        result.push(items[toKill])
        items.splice(toKill, 1)
        toKill += k
        toKill -= 1
        toKill %= items.length
    }
    result.push(items[0])
    return result
}

//console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1))
// console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
console.log(josephus([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ], 40))