const rockPaperScissors = function(rounds = 3) {
  const plays = ["rock", "paper", "scissors"];
  const sequences = [];
  const makeSequences = function(roundsLeft, playedSoFar = []) {
    if (!roundsLeft) {
      sequences.push(playedSoFar);
    } else {
      for (let i = 0; i < plays.length; i++) {
        if (i === 1) {
          debugger;
        }
        const currentPlay = plays[i];
        makeSequences(roundsLeft - 1, playedSoFar.concat(currentPlay));
      }
    }
  };
  makeSequences(rounds);
  return sequences;
};

console.log(rockPaperScissors(3));
