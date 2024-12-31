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
// // 2. Create human selection function using prompt
function getHumanChoice() {
    const choice = prompt("Enter Rock, Paper or Scissor")
    const str = choice.toLowerCase();
    return str;
};
// // Score variables
let humanScore = 0;
let computerScore = 0;
// Function to play the game
function playGame() {
     for (let i = 1; i <= 5; i++) {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
     };
};
playGame();

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