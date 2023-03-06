// Promises
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The promise has been resolved");
  }, 1000);
}).then((result) => {
  console.log(result);
});

// Promise chaining
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    return result * 2;
  })
  .then((result) => {
    return result * 2;
  })
  .then((result) => {
    return result * 2;
  })
  .then((result) => {
    console.log(`The final value is ${result}`);
  });

// The following is not chaining
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

promise3.then((result) => {
  return result * 2;
});

promise3.then((result) => {
  return result * 2;
});

// Returning promises
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then((result) => {
    console.log(`The final value is ${result}`);
  });
