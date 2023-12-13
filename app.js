let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let messageContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg")
let turn0 = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML = "O";
            turn0 = false
        }else{
            box.innerHTML = "X";
            turn0 = true
        }
        box.disabled = true;
        checkPattern();
    })
})
const checkPattern = ()=>{
    for(pattern of winPattern){
        let pos1Value = boxes[pattern[0]].innerHTML;
        let pos2Value = boxes[pattern[1]].innerHTML;
        let pos3Value = boxes[pattern[2]].innerHTML;
        if(pos1Value !="" && pos2Value !="" && pos3Value!=""){
            if(pos1Value === pos2Value && pos1Value === pos3Value){
                
                showWinner(pos1Value)
            }
        }
    }
}
const showWinner = (winner)=>{
    message.innerHTML = `Congratulation, winner is ${winner}✌`;
    messageContainer.classList.remove("hide");
    disabledButton();
}
const disabledButton = ()=>{
    for( let box of boxes){
        box.disabled = true
    }
}
const enabledButton = ()=>{
    for( let box of boxes){
        box.disabled = false
        box.innerHTML = "";
    }
}
const againGame = ()=>{
    turn0 = true
    enabledButton();
    messageContainer.classList.add("hide")
}
resetbtn.addEventListener("click",againGame);
newGameBtn.addEventListener("click",againGame);