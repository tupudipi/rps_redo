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

function initUI(){
    const header = document.createElement("div");
    header.id = "header";
    const headerText = document.createElement("h1");
    headerText.innerHTML = "Rock, Paper, Scissors";
    header.appendChild(headerText);
    document.body.appendChild(header);

    const main = document.createElement("main");
    document.body.appendChild(main);

    initButtons();

    const footer = document.createElement("div");
    footer.id = "footer";
    const footerText = document.createElement("p");
    footerText.innerHTML = "<a href='#'>tupudipi</a>";
    footer.appendChild(footerText);
    document.body.appendChild(footer);

}

function initButtons(){
    const main = document.querySelector("main");
    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttonsContainer";
    main.appendChild(buttonsContainer);

    const rock = document.createElement("button");
    rock.innerHTML = "✊";
    rock.setAttribute("id", "rock");
    rock.addEventListener("click", function(){
        const computerSelection = computerPlay();
        const result = playRound("rock", computerSelection);
        updateScore();
        roundResultText.innerHTML = result;
    });
    buttonsContainer.appendChild(rock);

    const paper = document.createElement("button");
    paper.innerHTML = "✋";
    paper.setAttribute("id", "paper");
    paper.addEventListener("click", function(){
        const computerSelection = computerPlay();
        const result = playRound("paper", computerSelection);
        updateScore();
        roundResultText.innerHTML = result;
    });
    buttonsContainer.appendChild(paper);

    const scissors = document.createElement("button");
    scissors.innerHTML = "✌";
    scissors.setAttribute("id", "scissors");
    scissors.addEventListener("click", function(){
        const computerSelection = computerPlay();
        const result = playRound("scissors", computerSelection);
        updateScore();
        roundResultText.innerHTML = result;
    });
    buttonsContainer.appendChild(scissors);

    const roundTextContainer = document.createElement("div");
    roundTextContainer.id = "roundTextContainer";
    main.appendChild(roundTextContainer);
    const roundResultText = document.createElement("p");
    roundResultText.innerHTML = "";
    roundTextContainer.appendChild(roundResultText);

    const score = document.createElement("p");
    score.id = "score";
    score.innerHTML = `Current score:
    You ${playerScore} - Computer ${computerScore}`;
    roundTextContainer.appendChild(score);
}

function updateScore(){
    const score = document.querySelector("#score");

    if(playerScore == 5){
        let winner = "player";
        disableButtons();
        askRestartPopup(winner);
    }
    else if(computerScore == 5){
        let winner = "computer";
        disableButtons();
        askRestartPopup(winner);
    }
    else {
        score.innerHTML = `Current score:
        You ${playerScore} - Computer ${computerScore}`;
    }
}

function disableButtons(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function(button){
        button.disabled = true;
    });
}

function askRestartPopup(winner){
    let winnerText = "";
    if(winner == "player"){
        winnerText = `You win! Final score:
        You ${playerScore} - Computer ${computerScore}`;
    }
    else{
        winnerText = `You lose!. Final score:
        You ${playerScore} - Computer ${computerScore}`;
    }

    const popup = document.createElement("div");
    popup.id = "popup";
    const popupText = document.createElement("p");
    popupText.innerHTML = winnerText;
    popup.appendChild(popupText);
    const restart = document.createElement("button");
    restart.innerHTML = "Restart";
    restart.addEventListener("click", function(){
        // restart game
        playerScore = 0;
        computerScore = 0;
        document.body.innerHTML = "";
        initUI();
    });
    popup.appendChild(restart);
    document.body.appendChild(popup);
}


let playerScore = 0;
let computerScore = 0;

initUI();


