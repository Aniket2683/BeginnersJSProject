let userScore = 0;
let compScore = 0;
let userWin = true;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () => {
    console.log("Draw");
    msg.innerText = "It was a Draw !!";
    msg.style.backgroundColor = "#73FBD3"
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin) {
        // console.log("User wins");
        msg.innerText = `You Win !! Your ${userChoice} beats Computer's ${compChoice}`;
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "#3ada4c";
    }else{
        // console.log("User Loses");
        msg.innerText = `You Lose !! Computer's ${compChoice} beats Your ${userChoice}`;
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "#da4a3a";
    }
}
const playGame = (userChoice) => {
    //user 
    // console.log(`User : ${userChoice}`);

    //generate computer choice
    const compChoice = genCompChoice();;
    // console.log(`Computer : ${compChoice}`);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        if (userChoice === "rock") {
            //paper,scissor
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin ,userChoice,compChoice)
    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')

        playGame(userChoice)
    })
})

