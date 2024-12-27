// STEPS
// Variables for tracking scores
const humanScore = 0;
const computerScore = 0;
// 1. Create a function for computer play: Use random selection

function computerPlay () {
    const random = Math.floor(Math.random() * 3);

    // Add if statements to check on the value of the random
        // There are three choices of the random (0, 1 & 2)
    if (random === 0) {
        console.log("rock");
    }else if (random === 1) {
        console.log("paper");
    }else {
        console.log("scissors");
    }
}

//2. Create a function for Human play

function humanPlay() {
    // create a prompt for entering human choice

    const choice = prompt("Enter Rock, Paper or Scissor");

    console.log(choice.toLowerCase());
}

//3. Create a funtion that plays the game round;

function playRound(playerSelection, computerSelection) {
    playerSelection = humanPlay();
    computerSelection = computerPlay();
    // Conditions for draw
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("You tied");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("You tied");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("You tied");
    }
    
    // Conditions to check player wins
    
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Yay! Rock beats scissors! Player Wins");
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Yay! Paper wraps rock! Player Wins");
    }else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("Yay! Scissor cuts paper! Player Wins");
    }

    // Conditions to check computer wins

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Yay!Scissors cuts Paper! Computer Wins");
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Yay! Paper wraps rock! Computer Wins");
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Yay! Rock beats scissors! Computer Wins");
    }
}

playRound();