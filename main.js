function computerPlay() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    const randomPick = rps[Math.random() * rps.length | 0];
    console.log(randomPick);
}
computerPlay();