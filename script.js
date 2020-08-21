let computerScore = 0;
let playerScore = 0;

document.getElementById('rock').addEventListener("click", game);
document.getElementById('paper').addEventListener("click", game);
document.getElementById('scissors').addEventListener("click", game);

//function: evaluates who wins the game
function game(){
    if (computerScore < 5 && playerScore < 5){
        let playerSelection = this.id;
        let computerSelection = computerPlay();
        roundResult = playRound(playerSelection, computerSelection);
        round(roundResult);
        if (computerScore === 5 || playerScore === 5){
            winner();
        }
    }
    else {
        document.getElementById('round').innerHTML = "Okay, you can stop now."
        document.getElementById('results').innerHTML = "Or I guess you could just reload the page?"
    }
}    
//function: computer move
function computerPlay() {
    let random = Math.floor(Math.random() * Math.floor(3));
        switch(random){
            case 0:
            return 'rock';
            break;
            case 1:
            return 'paper';
            break;
            case 2:
            return 'scissors';
        }
    } 
//function: evaluates who wins round
    function playRound(playerSelection, computerSelection){
        if (playerSelection === computerSelection){
                return 'tie';
        }
        else if (playerSelection === "rock"){
            if (computerSelection === "paper"){
                return "loss";
            }
            else if (computerSelection === "scissors"){
                return "win";
            }
        } 
        else if (playerSelection === "paper"){
            if (computerSelection === "scissors"){
                return "loss";
            }
            else if (computerSelection === "rock"){
                return "win";
            }
        }
        else if (playerSelection === "scissors"){
            if (computerSelection === "rock"){
                return "loss";
            }
            else if (computerSelection === "paper"){
                return "win";
            }
            else {
                return "error"
            }
        }
    }
//delivers winner/loser/draw message
function round(roundResult){
        if (roundResult === "tie"){
            document.getElementById('round').innerHTML = "Issa tie." + "<br><br>" + "Your Score: " + playerScore + " ||  Computer Score: "+ computerScore;
        }
        else if (roundResult === "loss"){
            computerScore++;
            document.getElementById('round').innerHTML = "Take the L" + "<br><br>" + "Your Score: " + playerScore + " ||  Computer Score: "+ computerScore;
        }
        else if (roundResult === "win"){
            playerScore++;
            document.getElementById('round').innerHTML = "Luck is on your side!" + "<br><br>" + "Your Score: " + playerScore + " ||  Computer Score: "+ computerScore;
        }
        else {
            console.log("error");
        }
   }
//delivers final results
function winner() {
     if (playerScore === 5) {
            document.getElementById('results').innerHTML = "You're a winner, baby!!";
        }
        else if (computerScore === 5) {
            document.getElementById('results').innerHTML = "Everybody loses sometimes :/";
        }
        else {
            console.log("error");
         }
        }