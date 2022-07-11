function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    if(random == 0){
        return "rock";
    }
    else if(random == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "It's a tie!";
    }
    else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            computerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}.
             You lose!
             Current score:
             You ${playerScore} - Computer ${computerScore}`;
        }
        else{
            playerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}.
             You win!
             Current score:
              You ${playerScore} - Computer ${computerScore}`;
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            computerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}. 
            You lose!
            Current score:
             You ${playerScore} - Computer ${computerScore}`;
        }
        else{
            playerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}. 
            You win!
            Current score: 
            You ${playerScore} - Computer ${computerScore}`;
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            computerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}. 
            You lose!
            Current score: 
            You ${playerScore} - Computer ${computerScore}`;
        }
        else{
            playerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}.
            You win!
            Current score: 
            You ${playerScore} - Computer ${computerScore}`;
        }
    }
}

function game(){
    let round = 1;
    while(round <= 5){
        const computerSelection = computerPlay();
        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        const result = playRound(playerSelection, computerSelection);
        alert(result);
        round++;
    }
    if(round > 5){
        alert(`Game over!
        Final score:
        You ${playerScore} - Computer ${computerScore}`);
        
        const playAgain = prompt("Would you like to play again? (y/n)").toLowerCase();
        if(playAgain == "y"){
            playerScore = 0;
            computerScore = 0;
            round = 1;
            game();
        }
    }
}

let playerScore = 0;
let computerScore = 0;
game();

