function isSingleRiffle(half1, half2, shuffledDeck) {
  var half1Index = 0;
  var half2Index = 0;
  var half1MaxIndex = half1.length - 1;
  var half2MaxIndex = half2.length - 1;

  for (var i = 0; i < shuffledDeck.length; i++) {
    var card = shuffledDeck[i];

    // if we still have cards in half1
    // and the "top" card in half1 is the same
    // as the top card in shuffledDeck
    if (half1Index <= half1MaxIndex && card === half1[half1Index]) {
      half1Index++;

      // if we still have cards in half2
      // and the "top" card in half2 is the same
      // as the top card in shuffledDeck
    } else if (half2Index <= half2MaxIndex && card === half2[half2Index]) {
      half2Index++;

      // if the top card in shuffledDeck doesn't match the top
      // card in half1 or half2, this isn't a single riffle.
    } else {
      return false;
    }
  }

  // all cards in shuffledDeck have been "accounted for"
  // so this is a single riffle!
  return true;
}
