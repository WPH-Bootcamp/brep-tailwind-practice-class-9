const sayHello = function () {
  console.log('hello');
};

sayHello();

function execute(fn) {
  fn();
}

execute(function () {
  console.log('Dijalankan');
});

function createGreeting() {
  return function () {
    console.log('Halo dari dalam!');
  };
}

const greet = createGreeting();
greet();

function greeting(name) {
  return 'Halo ' + name;
}

greeting.language = 'id';
greeting.version = 1;

console.log(greeting.language);
console.log(greeting.name);
console.log(greeting.length);
