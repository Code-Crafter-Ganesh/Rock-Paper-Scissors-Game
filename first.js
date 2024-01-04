let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const msg1 = document.querySelector(".msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


 const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
 };


        const drawGame = () => {
            msg1.innerText = "Game Was Draw.Play Again";
            msg1.style.backgroundcolor = "#081b31"; //color ka bast nahi ye
        };


        const showWinner = (userWin, userChoice, compChoice) => {
            if(userWin){
                userScore++;
                userScorePara.innerText = userScore;
                msg1.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
                msg1.style.backgroundcolor = "green";
            }else{
                compScore++;
                compScorePara.innerText = compScore;
                msg1.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
                msg1.style.backgroundcolor = "red";
            }
        };
        
     const playGame =(userChoice) => {
        console.log("user choice = ", userChoice);
        const compChoice = genCompChoice();
        console.log("comp choice = ", compChoice);


        if(userChoice === compChoice){
            //draw game
            drawGame();
        } else{
            let userWin = true;
            if(userChoice === "rock"){
                userWin = compChoice === "paper" ? false : true;
            } else if(userChoice === "paper"){
                userWin = compChoice === "scissors" ? false : true;
            } else{
            userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
     };


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
    playGame(userChoice);

    });
});
