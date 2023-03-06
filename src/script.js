// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The promise has been resolved");
  }, 1000);
}).then((result) => {
  console.log(result);
});

// Promise chaining
const chainedPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(1);
  }, 1000);
}).then(result);
