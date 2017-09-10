function validSolution(board) {
    var longBoard = [].concat.apply([], board)
    for (let i = 0; i <= 8; i++) {
        var board3 = []
        if (!checkRows(board[i])) return false

        var newArray = board[0].map(function (col, i) {
            return board.map(function (row) {
                return row[i]
            })
        });

        if (!checkRows(newArray[i])) return false;

        for (let j = 0; j <= 2; j++) {
            var index = (i - i % 3) * 9 + 3 * (i % 3) + j * 9
            board3.push(longBoard.slice(index, index + 3))
        }
        if (!checkRows([].concat.apply([], board3))) return false
    }
    return true
}

function checkRows(row) {
    return [5, 3, 4, 6, 7, 8, 9, 1, 2].every(function (a) {
        return row.indexOf(a) >= 0
    })
}

var a = validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]])
console.log(a)
