snail = function (arr) {
    if (array.length === 0) return arr
    return flatten(compute(arr))
}

function flatten(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? flatten(flat) : flat;
  }

function compute(array)
{
    var result = array.slice(0, 1)
    array.splice(0, 1)
    if (array.length === 0) 
        return result
    var reversedArray = []
    for (let j = array[0].length - 1; j >= 0; j--) {
        var reversedRow = []
        for (let i = 0; i < array.length; i++) {
            reversedRow.push(array[i][j])
        }
        reversedArray.push(reversedRow)
    }
    return result.concat(new snail(reversedArray))
}

var array = [[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]

var toto = new snail(array)

console.log(toto)