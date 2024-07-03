// black pieces

function blackPawn(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/black/pawn.png",
    };
}

function blackRook(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/black/rook.png",
    };
}
function blackKnight(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/black/knight.png",
    };
}
function blackBishop(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/black/bishop.png",
    };
}
function blackQueen(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/black/queen.png",
    };
}
function blackKing(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/black/king.png",
    };
}

// white pieces


function whitePawn(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/white/pawn.png",
    };
}

function whiteRook(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/white/rook.png",
    };
}
function whiteKnight(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/white/knight.png",
    };
}
function whiteBishop(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/white/bishop.png",
    };
}
function whiteQueen(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/white/queen.png",
    };
}
function whiteKing(current_position){
    return{
        current_position, 
        img: "assets/images/pieces/white/king.png",
    };
}



export {blackPawn, whitePawn, blackBishop, blackKing, blackKnight, blackQueen, blackRook, whiteBishop, whiteKing, whiteQueen, whiteKnight, whiteRook};