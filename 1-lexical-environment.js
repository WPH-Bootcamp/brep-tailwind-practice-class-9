const globalVar = 'Global Variable';
console.log(globalVar);

function localFunction() {
  const localVar = 'Local Variable';
  console.log(globalVar);
  console.log(localVar);
  function localFunction2() {
    const localVar2 = 'Local Variable 2';
    console.log(globalVar);
    console.log(localVar);
    console.log(localVar2);
  }
}

// console.log(localVar);
localFunction();

function outer() {
  const outerVar = 'outer';

  function inner() {
    const innerVar = 'inner';
    console.log(innerVar, outerVar, globalVar);
  }

  inner();
}

outer();

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
