//grab the buttons and the text inputs
const enterBtn = document.getElementById("enter"); //Enter button
const resetBtn = document.getElementById("reset"); //Reset button
 //Input for the player name
let playerNameInput = document.getElementById("playerNameInput");
//Player name H1
let playerName = document.getElementById("playerName");
let roundsToPlay = document.getElementById("roundsToPlay");

//Write a function to collect and display the player name
//* When a player enters the name
//* When a player enters the number of rounds
//* When a player clicks enter button
//* When the reset button is clicked should reset everything
function enterPlayerName() {
    enterBtn.addEventListener ("click", () =>{
        if (playerNameInput.value && roundsToPlay.value > 0) {
            playerName.textContent = playerNameInput.value;
        }else {
            playerName.textContent = "Player 1"
        };
    });
};
enterPlayerName();

//Reset the name and the rounds to play
resetBtn.addEventListener("click", () =>{
    playerName.textContent = "Player 1";
    playerNameInput.value = "";
    roundsToPlay.value = 0;
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
        return "rock";
    }else if (random === 1) {
        return "paper";
    }else{
        return "scissors";
    };
};
// 2. Create human selection function using the buttons
function getHumanChoice() {
    const rockBtn = document.getElementById("rockbtn");
    const paperBtn = document.getElementById("paperbtn");
    const scissorBtn = document.getElementById("scissorbtn");
    
    rockBtn.addEventListener("click", () => {
        rock.style.display = "block";
        paper2.style.display = "none";
        scissors2.style.display = "none";
    });
};
getHumanChoice()
// // Score variables
// let humanScore = 0;
// let computerScore = 0;
// // Function to play the game
// function playGame() {
//      for (let i = 1; i <= 5; i++) {
//         computerSelection = getComputerChoice();
//         humanSelection = getHumanChoice();
//         playRound(computerSelection, humanSelection);
//      };
// };
// playGame();

// //3. Create a function to play one round of the game
function playRound() {
    if (computerSelection === humanSelection) {
        console.log("It is a Draw, play again!");
        computerScore;
        humanScore;
    } else if (computerSelection === "rock" && humanSelection === "paper"){
        console.log("Paper wraps Rock! Player Wins.");
        humanScore++;
    } else if (computerSelection === "paper" && humanSelection === "scissors") {
        console.log("Scissors cuts Paper! Player Wins.");
        humanScore++;
    }else if (computerSelection === "scissors" && humanSelection === "rock") {
        console.log("Rock beats Scissors! Player Wins.");
        humanScore++;
    }else if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("Rock beats Scissors! Computer Wins.");
        computerScore++;
    }else if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("Paper wraps Rock! Computer Wins.");
        computerScore++;
    }else if (computerSelection === "scissors" && humanSelection === "paper") {
        console.log("Scissors cuts Paper! Computer Wins.");
        computerScore++;
    };

    // Check for the winner or lose or draw;
    if (`${humanScore}` > `${computerScore}`) {
        console.log(`Your scores are:\nPlayer Score: ${humanScore}.\nComputer Score: ${computerScore}.`);
        console.log("Yay! Player Wins");
    } else if(`${humanScore}` < `${computerScore}`){
        console.log(`Your scores are:\nPlayer Score: ${humanScore}.\nComputer Score: ${computerScore}.`);
        console.log("Sorry! Computer Wins");
    } else {
        console.log(`Your scores are:\nPlayer Score: ${humanScore}.\nComputer Score: ${computerScore}.`);
        console.log("It is a draw. Play again");
    }
};

