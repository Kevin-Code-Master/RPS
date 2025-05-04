//grab the buttons and the text inputs
const enterBtn = document.getElementById("enter"); //Enter button
const resetBtn = document.getElementById("reset"); //Reset button
 //Input for the player name
let playerNameInput = document.getElementById("playerNameInput");
//Player name H1
let playerName = document.getElementById("playerName");
let roundsToPlayDisplay = document.getElementById("roundsToPlay");

//Write a function to collect and display the player name
//* When a player enters the name
//* When a player enters the number of rounds
//* When a player clicks enter button
//* When the reset button is clicked should reset everything
function enterPlayerName() {
    enterBtn.addEventListener ("click", () =>{
        if (playerNameInput.value && roundsToPlay.value > 0) {
            playerName.textContent = playerNameInput.value;
            let roundsPlayed = document.getElementById("roundsPlayed");
            roundsPlayed.value = roundsToPlayDisplay.value;
        }else {
            playerName.textContent = "Player 1";
            roundsPlayed.value = "";
        };
    });
};
enterPlayerName();

//Reset the name and the rounds to play
resetBtn.addEventListener("click", () =>{
    playerName.textContent = "Player 1";
    playerNameInput.value = "";
    roundsToPlay.value = 0;
    roundsPlayed.value = "";
    //Don't display any images
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";

    rock2.style.display = "none";
    paper2.style.display = "none";
    scissors2.style.display = "none";
    //Reset scores
    humanScore = 0;
    computerScore = 0;
});


//Grab the images using their ids
//Computer Images
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");

//Player Images
const scissors2 = document.getElementById("scissors2");
const paper2 = document.getElementById("paper2");
const rock2 = document.getElementById("rock2");


// // 1. Create a computer selection using random selection
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        rock.style.display = "block";
        paper.style.display = "none";
        scissors.style.display = "none";
        return "rock";
    }else if (random === 1) {
        rock.style.display = "none";
        paper.style.display = "block";
        scissors.style.display = "none";
        return "paper";
    }else{
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "block";
        return "scissors";
    };
};
// 2. Create human selection function using the buttons
function getHumanChoice() {
    const rockBtn = document.getElementById("rockbtn");
    const paperBtn = document.getElementById("paperbtn");
    const scissorBtn = document.getElementById("scissorbtn");
    
    rockBtn.addEventListener("click", () => {
        rock2.style.display = "block";
        paper2.style.display = "none";
        scissors2.style.display = "none";
        handleHumanChoice("rock");
    });
    
    paperBtn.addEventListener("click", () => {
        rock2.style.display = "none";
        paper2.style.display = "block";
        scissors2.style.display = "none";
        handleHumanChoice("paper");
    });
    
    scissorBtn.addEventListener("click", () => {
        rock2.style.display = "none";
        paper2.style.display = "none";
        scissors2.style.display = "block";
        handleHumanChoice("scissors");
    });
};

// Score display
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");

let humanScore = 0;
let computerScore = 0;

//Determine the winner
function determineWinner(human,computer) {
    if(human === computer){
        humanScore;
        computerScore;
        return "It's a tie";
    }else if(human === "rock" && computer ==="scissors"||
        human === "scissors" && computer === "paper" ||
        human === "paper" && computer === "rock"){
        
        humanScore ++;
        playerScoreDisplay.textContent = humanScore;
        return "You win!";
    }else {

        computerScore ++;
        computerScoreDisplay.textContent = computerScore;
        return "Computer wins!";
    };
};
//Handle human choice
function handleHumanChoice(humanChoice) {
    console.log("You chose:", humanChoice);

    const computerChoice = getComputerChoice();
    console.log("Computer chose:", computerChoice);

    const result = determineWinner(humanChoice,computerChoice);
    console.log(result);
};
getHumanChoice();





    // // Check for the winner or lose or draw;
    // if (`${humanScore}` > `${computerScore}`) {
    //     console.log(`Your scores are:\nPlayer Score: ${humanScore}.\nComputer Score: ${computerScore}.`);
    //     console.log("Yay! Player Wins");
    // } else if(`${humanScore}` < `${computerScore}`){
    //     console.log(`Your scores are:\nPlayer Score: ${humanScore}.\nComputer Score: ${computerScore}.`);
    //     console.log("Sorry! Computer Wins");
    // } else {
    //     console.log(`Your scores are:\nPlayer Score: ${humanScore}.\nComputer Score: ${computerScore}.`);
    //     console.log("It is a draw. Play again");
    // }


