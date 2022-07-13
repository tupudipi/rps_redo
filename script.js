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
             You lose!`;
        }
        else{
            playerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}.
             You win!`;
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            computerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}. 
            You lose!`;
        }
        else{
            playerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}. 
            You win!`;
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            computerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}. 
            You lose!`;
        }
        else{
            playerScore++;
            return `You picked ${playerSelection} - Computer picked ${computerSelection}.
            You win!`;
        }
    }
}

// function game(){
//     let round = 1;
//     while(round <= 5){
//         const computerSelection = computerPlay();
//         const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
//         const result = playRound(playerSelection, computerSelection);
//         alert(result);
//         round++;
//     }
//     if(round > 5){
//         alert(`Game over!
//         Final score:
//         You ${playerScore} - Computer ${computerScore}`);
        
//         const playAgain = prompt("Would you like to play again? (y/n)").toLowerCase();
//         if(playAgain == "y"){
//             playerScore = 0;
//             computerScore = 0;
//             round = 1;
//             game();
//         }
//     }
// }

function initUI(){
    const rock = document.createElement("button");
    rock.innerHTML = "Rock";
    rock.setAttribute("id", "rock");
    rock.addEventListener("click", function(){
        const computerSelection = computerPlay();
        const result = playRound("rock", computerSelection);
        updateScore();
        roundResultText.innerHTML = result;
    });
    document.body.appendChild(rock);

    const paper = document.createElement("button");
    paper.innerHTML = "Paper";
    paper.setAttribute("id", "paper");
    paper.addEventListener("click", function(){
        const computerSelection = computerPlay();
        const result = playRound("paper", computerSelection);
        updateScore();
        roundResultText.innerHTML = result;
    });
    document.body.appendChild(paper);

    const scissors = document.createElement("button");
    scissors.innerHTML = "Scissors";
    scissors.setAttribute("id", "scissors");
    scissors.addEventListener("click", function(){
        const computerSelection = computerPlay();
        const result = playRound("scissors", computerSelection);
        updateScore();
        roundResultText.innerHTML = result;
    });
    document.body.appendChild(scissors);

    const roundResultText = document.createElement("p");
    roundResultText.innerHTML = "";
    document.body.appendChild(roundResultText);

    const score = document.createElement("p");
    score.id = "score";
    score.innerHTML = `Current score:
    You ${playerScore} - Computer ${computerScore}`;
    document.body.appendChild(score);
}

function updateScore(){
    const score = document.querySelector("#score");
    score.innerHTML = `Current score:
    You ${playerScore} - Computer ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;

initUI();


