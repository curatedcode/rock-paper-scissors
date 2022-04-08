function computerPlay() {
    const rps = ['rock', 'paper', 'scissors'];
    const randomPick = rps[Math.random() * rps.length | 0];
    return(randomPick);
}

const unmodifiedPlayerSelection = 'RoCk';
playerSelection = unmodifiedPlayerSelection.toLowerCase();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    const pBR = 'Paper beats Rock!';
    const sBP = 'Scissors beats Paper!';
    const rBS = 'Rock beats Scissors!';
    const winner = 'You win!';
    const loser = 'You lose!';
    if (playerSelection != '' && computerSelection != '') {
        if (playerSelection == 'rock' && computerSelection == 'paper') {
            return(`${loser} ${pBR}`);
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            return(`${loser} ${rBS}`);
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            return(`${loser} ${sBP}`);
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            return(`${winner} ${pBR}`);
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            return(`${winner} ${sBP}`);
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            return(`${winner} ${rBS}`);
        }
    }
}

playRound(playerSelection, computerSelection);