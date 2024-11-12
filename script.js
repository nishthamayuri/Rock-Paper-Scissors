let playerScore = 0;
let computerScore = 0;

function play(pc) {
    const choices = ['rock', 'paper', 'scissors'];
    const cc = choices[Math.floor(Math.random() * 3)];
    let result;

    if (pc === cc) {
        result = "It's a tie!";
} else if (
        (pc === 'rock' && cc === 'scissors') ||
        (pc === 'paper' && cc === 'rock') ||
        (pc === 'scissors' && cc === 'paper')
    ) {
        result = "You win!";
        playerScore++;} 
  else {
         result = "You lose!";
         computerScore++;
     }
 
     document.getElementById('result').innerText = `Computer chose ${cc}. ${result}`;
     updateScores();
 }
 function updateScores() {
    document.getElementById('player-score').innerText = `Player Score: ${playerScore}`;
    document.getElementById('computer-score').innerText = `Computer Score: ${computerScore}`;
}

function newGame() {
playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById('result').innerText = '';
}