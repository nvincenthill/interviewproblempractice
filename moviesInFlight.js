// Write a function that takes an integer flightLength (in minutes)
// and an array of integers movies (in minutes) and returns a
// boolean indicating whether there are two numbers in movies
// whose sum equals flightLength.

// I - flight length (int num) & movies (arr of int nums)
// O - boolean
// C - optimal runtime over space, users cannot watch the same movie twice
// E - no movies, flight length === 0, etc.

function canTwoMoviesFillFlight(movies, flightLength) {
  if (flightLength === 0 || movies.length === 0) {
    return false;
  }

  for (let i = 0; i < movies.length; i++) {
    for (let j = 0; j < movies.length; j++) {
      if (movies[i] + movies[j] === flightLength && i !== j) {
        return true;
      }
    }
  }

  return false;
}
