class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Halo, saya ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, nis) {
    super(name, age);
    this.nis = nis;
  }

  greet() {
    return `Halo, saya ${this.name} adalah seorang murid`;
  }
}
const ucup = new Student('Ucup', 28, '12312312');
console.log(ucup);
console.log(ucup.greet());

class Teacher extends Person {
  constructor(name, age, nig) {
    super(name, age);
    this.nig = nig;
  }

  greet() {
    return `${super.greet()} [GURU]`;
  }
}
const dicky = new Teacher('Dicky', 28, '1293123');
console.log(dicky);
console.log(dicky.nig);
console.log(dicky.greet());
