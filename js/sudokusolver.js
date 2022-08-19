let board = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

function solve(board) {
    // console.log(countEmptyCells(board))
    console.log(findNextCell(board))
    // identify the easiest cells
    // return board
}

function countEmptyCells(board) {
    let count = 0
    for (line of board) {
        for (c of line) {
            if (c === 0) {
                count++;
            }
        }
    }
    return count;
}

function findNextCell(board) {
    let res = [];
    let 
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const element = board[i][j];
            if (element != 0) continue;
            res[i * 10 + j] = countEmptyNeighbours(board, i,j);
        }
    }
    console.log(res);
}

function countEmptyNeighbours(array, a, b) {
    let count = 0;
    for (let i = 0; i < 9; i++) {
        if(array[a][i] === 0) count++;
    }
    for (let i = 0; i < 9; i++) {
        if(array[i][b] === 0) count++;
    }
    return count;
}

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

console.log(solve(board))