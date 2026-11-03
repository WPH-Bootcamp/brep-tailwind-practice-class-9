class Animal {}

class Dog extends Animal {}

const d = new Dog();

console.log(d instanceof Animal);
console.log(d instanceof Dog);
