class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Halo, saya ${this.name}`;
  }
}

const ucup = new Person('Ucup', 28);
console.log(ucup.name);
console.log(ucup.age);
console.log(ucup.greet());

class Calculator {
  add(a, b) {
    return a + b;
  }
}

const tambah = new Calculator();
console.log(tambah.add(2, 3));
