let a= document.getElementById("tictactoe");
let board=[];
let disPlay= "";
for (let i = 0; i < 10; i++) {
    board[i] =new Array(0,0,0,0,0,0,0,0,0,0)
}
for (let i = 0; i < 10; i++) {
    disPlay += "</br>";
    for (let j = 0; j < 10; j++) {
        disPlay += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;"
    }
}
disPlay+=("<br/><input type='button' value='Play' onclick='play1()'>")
a.innerHTML = disPlay;
function play1(){
    let positionX= +prompt("Player 1 Nhập tọa độ X: ");
    let positionY= +prompt("Player 1 Nhập tọa độ Y: ");
    disPlay= "";
    board[positionX][positionY] = "X";
    for (let i = 0; i < 10; i++) {
        disPlay+= "</br>";
        for (let j = 0; j < 10; j++) {
            disPlay += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;"
        }
    } display+= "<br/><input type='button' value='Play' onclick='play1()'>"
    a.innerHTML= disPlay
}