async function func1() {
  return 1;
}

const func2 = async () => {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
};

func1().then((result) => {
  console.log(result);
});

func2().then((result) => {
  console.log(result);
});

const func3 = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 1000);
  });

  // let result = promise.then((result) => {
  //   console.log(result);
  // });

  let result = await promise;
  console.log(result);

  // We cannot use await in regular functions
};

func3();
