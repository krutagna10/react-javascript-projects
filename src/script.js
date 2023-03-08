// Call stack and memory heap

// Call stack => keep track of where we are in the code

// Memory heap => LIFO data structure that is used for function calls that

// Javascript Engine => Program that executes the javascript code

// Creating promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("The promise has been resolved, YOU WON!");
    }
    reject(new Error("The promise has been rejected"));
  }, 2000);
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`${error.name}: ${error.message}, YOU LOSE!`);
  });

// Promisify
const wait = function (seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("The promise is resolved"), 1000);
  });
};

wait()
  .then((result) => {
    console.log(result);
    return wait();
  })
  .then((result) => {
    console.log(result);
    return wait();
  })
  .then((result) => {
    console.log(result);
    return wait();
  });
