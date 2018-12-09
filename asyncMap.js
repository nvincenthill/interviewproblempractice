const asyncMap = function(tasks, callback) {
  const resultsArray = [];
  let resultsCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    const cb = function(result) {
      resultsArray[i] = result;
      resultsCount++;
      if (resultsCount === tasks.length) {
        callback(resultsArray);
      }
    };
    tasks[i](cb);
  }
};
