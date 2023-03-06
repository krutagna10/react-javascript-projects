// Rest Parameters revision
const sum = (...args) => {
  return args.reduce((acc, element) => {
    return acc + element;
  }, 0);
};

console.log(sum(1, 2, 3, 4, 5));

// Spread revision
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

console.log(Math.max(...arr3));

// Array.from converts an iterable(like a string) into an array
let str = "Hello";
console.log(Array.from(str));
console.log([...str]);

const arr4 = [1, 2, 3];
const arr4Copy = [...arr4];

console.log(JSON.stringify(arr4) === JSON.stringify(arr4Copy));

console.log(arr4 === arr4Copy);

arr4.push(4);
console.log(arr4, arr4Copy);

// Rest parameters are used to create functions that accept any number of arguments.
// Spread syntax is used to pass an array to a function that requires many arguments.
