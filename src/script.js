// Event loop in practice
console.log("Test start");

setTimeout(() => console.log("0 second timer"), 0);

const promise1 = new Promise((resolve, reject) => {
  resolve("Short promise has been resolved");
}).then((result) => {
  console.log(result);
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Long promise has been resolved");
}).then((result) => {
  for (let i = 0; i < 10000000000000; i++) {
    let num = i * i * i;
  }
  console.log(result);
});

console.log("Test end");
