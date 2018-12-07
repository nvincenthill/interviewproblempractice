const throttle = (func, limit) => {
  let queue = 0;

  const checkQueue = () => {
    if (queue > 0) {
      queue -= 1;
      func.call(null);
      setTimeout(checkQueue, 1000 / limit);
    }
  };

  return function() {
    if (queue === 0) {
      func.call(null);
      queue += 1;
      setTimeout(() => {
        checkQueue();
      }, 1000 / limit);
    } else {
      queue += 1;
    }
  };
};

const helloWorld = () => {
  console.log("Hello World!", Date.now());
};

let throttledWorld = throttle(helloWorld, 1);

for (let i = 0; i < 10; i++) {
  throttledWorld();
}
