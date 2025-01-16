function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice: rock, paper, or scissors");
    if (humanChoice === null) {
        return getHumanChoice();
    }
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie! You've both chosen " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ".";
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ".";
    } else {
        computerScore++;
        return "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ".";
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(result);
        console.log("Score - Human:", humanScore, "Computer:", computerScore);
    }
    if (humanScore > computerScore) {
        return "You win the game!";
    } else if (humanScore < computerScore) {
        return "You lose the game!";
    } else {
        return "The game is a tie!";
    }
}
console.log(playGame());
