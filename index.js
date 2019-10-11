function threeTrues(iterable) {
    let count = 0;
    for (const element of iterable) {
        if ((element)) {
            ++count;
        }
    }
    return count === 3;
}

function twoOrThreeTrues(iterable) {
    let count = 0;
    for (const element of iterable) {
        if ((element)) {
            ++count;
        }
    }
    return count === 2 || count === 3;
}


function* GameOfLife(board) {
    let current = new Board(board);
    const getter = container => (x, y) => container[y][x]
    let count = 0
    while (count++ <= 10) {
        const boardContent = current.data;
        let getterTmp = getter(boardContent);
        let nextBoard = new Array();
        for (let y = 0; y < boardContent.length; y++) {
            let lineNextBoard = []
            nextBoard.push(lineNextBoard)
            for (let x = 0; x < boardContent[0].length; x++) {
                    lineNextBoard.push(
                        (getterTmp(x, y)) ? (+threeTrues(current.neighbour(x, y))) : (+twoOrThreeTrues(current.neighbour(x, y)))
                    )                                     
            }
        }
        yield nextBoard;
        current = new Board(nextBoard);
    }

}



function Board(data) {
    this.data = data;
    this.height = data.length;
    this.width = data[0].length;
    const get = (x, y) => this.data[y][x]

    this.line = function* (x, y, center = true) {
        if (x > 0) yield get(x - 1, y)
        if (center) yield get(x, y)
        if (x < this.width) yield get(x + 1, y)
    }

    this.neighbour = function* (x, y) {
        if (y) yield* this.line(x, y - 1);
        yield* this.line(x, y, false);
        if (y + 1 < this.height) yield* this.line(x, y + 1)
    }

}


const a = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const b = [
    [1, 2, 3, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 4, 0, 0, 0, 0, 0, 7, 0],
    [7, 6, 5, 1, 0, 0, 0, 1, 1, 1],
    [0, 1, 1, 1, 0, 0, 0, 1, 9, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
const gol =  GameOfLife(a);
const y = [...gol];
console.log(y)

// const t = new Board(b);
// const it1 = t.neighbour(8, 5)
// const itA1 = [...it1];
// console.log(itA1)

// const a2 = t.neighbour(8,3)

// a2;