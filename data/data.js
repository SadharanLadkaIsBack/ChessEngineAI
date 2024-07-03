function Greet() {
    alert("Hello, World");
}

// for each square
function Square(color, id, piece) {
    return {
        color,
        id,
        piece
    };
}

function SquareRaw(rowId) {

    const squareRow = [];
    const abcd = ["a","b","c","d","e","f", "g","h"]

    if (rowId % 2 == 0) {
        abcd.forEach((element, index) => {
            if(index % 2 == 0){
                squareRow.push(Square("white", element + rowId, null))
            }else{
                squareRow.push(Square("black", element + rowId, null))
            }
        });
    } else {
        abcd.forEach((element, index) => {
            if(index % 2 == 0){
                squareRow.push(Square("black", element + rowId, null))
            }else{
                squareRow.push(Square("white", element + rowId, null))
            }
        });
    }
    return squareRow;
}

function initGame() {

    return [SquareRaw(8),
        SquareRaw(7), 
        SquareRaw(6), 
        SquareRaw(5), 
        SquareRaw(4), 
        SquareRaw(3), 
        SquareRaw(2), 
        SquareRaw(1)]
}

export { initGame };