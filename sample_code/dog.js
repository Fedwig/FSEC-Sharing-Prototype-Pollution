function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`Whoof! Whoof! My name is ${this.name}`);
}

const roscoe = new Dog('Roscoe');
roscoe.bark();
