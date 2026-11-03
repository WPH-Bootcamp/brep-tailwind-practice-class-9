class Person {
  static species = 'Home Sapiens';

  constructor(name) {
    this.name = name;
  }

  static count() {
    return this._count ?? 0;
  }

  static createAnonim() {
    return new Person('Anonim');
  }
}

Person._count = 5;

console.log(Person.count());

console.log(Person);
console.log(Person.species);

const userAnon = Person.createAnonim();
console.log(userAnon);

const ucup = new Person('Ucup');
console.log(ucup);
