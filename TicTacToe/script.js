let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbutton");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;
let count=0;
let isWin=false;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disablebuttons = () => {
    for (let box in boxes) {
        box.disabled = true;
    }
}
const enablebuttons = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        count=0;
    }
}

const showWinner = (winner) => {
    msgConatiner.classList.remove("hide");
    msg.innerHTML = `Winner is ${winner}`;
    disablebuttons();
    reset.disabled=true;
}

const checkwinner = (count) => {
    for (let pattern of winPattern) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val ) {
                console.log(`Winner is ${pos1Val}`);
                isWin=true;
                showWinner(pos1Val);
            }
            if(!isWin){
                isDraw();
            }

        }
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log("box was clicked");
        if (turnX) {
            box.innerHTML = "O";
            turnX = false;
        }else {
            box.innerHTML = "X"
            turnX = true;
        }
        count++;
        console.log(count);
        box.disabled = true;

        checkwinner(count);
    })
});


const newGame = () => {
    turnX = true;
    enablebuttons();
    isWin=false;
    reset.disabled=false;
    msgConatiner.classList.add("hide");

}
const resetGame = () => {
    turnX = true;
    isWin=false;
    enablebuttons();
    msgConatiner.classList.add("hide");

}

newGameBtn.addEventListener('click', newGame);
reset.addEventListener('click', resetGame);

const isDraw =()=>{

    if(count==9 && !isWin){
        console.log(`draw`);
        msgConatiner.classList.remove("hide");
        msg.innerHTML = `Game is Draw!`;
        disablebuttons();
        reset.disabled=true;
    }
}