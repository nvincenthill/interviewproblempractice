// Write a function that takes an integer flightLength (in minutes)
// and an array of integers movies (in minutes) and returns a
// boolean indicating whether there are two numbers in movies
// whose sum equals flightLength.

// I - flight length (int num) & movies (arr of int nums)
// O - boolean
// C - optimal runtime over space, users cannot watch the same movie twice
// E - no movies, flight length === 0, etc.

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  return false;
}
