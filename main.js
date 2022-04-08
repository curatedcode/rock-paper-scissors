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
    if (playerSelection != '' && computerSelection != '') {
        if (playerSelection == 'rock' && computerSelection == 'paper') {
            return(`${pBR}`);
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            return(`${rBS}`);
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            return(`${sBP}`);
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            return(`${pBR}`);
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            return(`${sBP}`);
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            return(`${rBS}`);
        }
    }
}

playRound(playerSelection, computerSelection);