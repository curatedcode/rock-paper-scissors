'use strict';

function computerPlay() {
    const rps = ['rock', 'paper', 'scissors'];
    const randomPick = rps[Math.random() * rps.length | 0];
    return(randomPick);
}

const computerSelection = computerPlay();
console.log(computerSelection);

const entryPrompt = 'paper';
const playerSelection = entryPrompt.toLowerCase();

let cScore = 0;
let pScore = 0;

function playRound(playerSelection, computerSelection) {
    const pBR = 'Paper beats Rock!';
    const sBP = 'Scissors beats Paper!';
    const rBS = 'Rock beats Scissors!';
    const tie = 'It\'s a tie';
    const cWin = 'Computer Wins! You Suck!';
    const pWin = 'You Win! Computers Suck!';
    const fucked = 'Something\'s fucked up man!';
    if (playerSelection != '' && computerSelection != '') {
        if (playerSelection == 'rock' && computerSelection == 'paper') {
            cScore++;
            return(`${pBR} ${cWin}`);
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            cScore++;
            return(`${rBS} ${cWin}`);
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            cScore++;
            return(`${sBP} ${cWin}`);
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            pScore++;
            return(`${pBR} ${pWin}`);
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            pScore++;
            return(`${sBP} ${pWin}`);
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            pScore++;
            return(`${rBS} ${pWin}`);
        } else if (playerSelection == computerSelection) {
            return(tie);
        } else {
            return(fucked);
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        entryPrompt;
        console.log(playRound(playerSelection, computerSelection));
    }
    if (pScore < cScore) {
        console.log('You Lose! Can\'t believe you suck that bad!')
    } else if (pScore > cScore) {
        console.log('You win! You\'re smarter than a computer!')
    } else if (pScore == cScore) {
        console.log('We\'ll looks like you\'re as smart as a computer!');
    }
}

game();