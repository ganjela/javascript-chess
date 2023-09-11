const chessBoard = document.querySelector("#chessboard");
const playerColor = document.querySelector("#player-color");
const infoDisplay = document.querySelector("info-display");
const width = 8;

const pieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '' , '',
    '', '', '', '', '', '', '' , '',
    '', '', '', '', '', '', '' , '',
    '', '', '', '', '', '', '' , '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
]

function createBoard(){
    pieces.forEach((piece)=>{
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add('beige');
        chessBoard.append(square);
    });
}

createBoard()