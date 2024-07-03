import * as piece from "../data/pieces.js";

const root_div = document.getElementById("root")

// use when you want to render the pieces on board
function pieceRender(data){
    
    data.forEach(row => {
        row.forEach(square => {
            // if square has piece
            if(square.piece){
                const squareEl = document.getElementById(square.id);

                // create piece
                const piece = document.createElement("img")
                piece.src = square.piece.img;
                piece.classList.add("piece");

                // insert piece into square element
                squareEl.appendChild(piece);
            }
        });
    });
}

// use when you want to render the board for the first time when the game starts
function initGameRender(data){
    data.forEach(element => {
        const rowEl = document.createElement("div");
        element.forEach(square => {
            const squareDiv = document.createElement("div");
            squareDiv.id = square.id;
            squareDiv.classList.add(square.color, "square");

            // render black pawn
            if(square.id[1]==7){
                square.piece = piece.blackPawn(square.id);
            }

            // render black rook
            if(square.id == "h8" || square.id == "a8"){
                square.piece = piece.blackRook(square.id);
            }

            //render white pawn
            if(square.id[1]==2){
                square.piece = piece.whitePawn(square.id);
            }

            rowEl.appendChild(squareDiv);
        });
        rowEl.classList.add("squareRow");
        root_div.appendChild(rowEl);
    });

    
    pieceRender(data);
}



export {initGameRender};