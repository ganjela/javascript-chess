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
    pieces.forEach((piece,i)=>{
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = piece;
        square.firstChild?.setAttribute('draggable',true);
        square.setAttribute('square-id', i);

        const row = Math.floor((63 - i) / 8) + 1;

        if(row % 2 == 0){
            square.classList.add(i % 2==0? "beige" : "brown")
        }else{
            square.classList.add(i % 2==0? "brown" : "beige")
        }

        if(i <= 15){
            square.firstChild.firstChild.classList.add('black');
        }else if(i>=48){
            square.firstChild.firstChild.classList.add('white');
        }


        

        chessBoard.append(square);
    });
}

createBoard();

const allSquares = document.querySelectorAll("#chessboard .square");

allSquares.forEach(square=>{
    square.addEventListener('dragstart',dragStart);
    square.addEventListener('dragover',dragOver);
    square.addEventListener('dragdrop',dragDrop);
});

let startPositionId;
let draggedElement;

function dragStart(e){
    startPositionId = e.target.parentNode.getAttribute('square-id');
    draggedElement =  e.target;
}

function dragOver(e){
    e.preventDefault();
    console.log(e);
}

//TO DO
function dragDrop(){

}