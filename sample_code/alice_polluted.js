function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person('Alice');
alice.greet(); // Output: Hello, my name is Alice


alice.__proto__.__proto__.goodbye = function () {
  console.log('Nice meeting you. Goodbye!');
}

alice.goodbye();

console.log(alice.__proto__.__proto__);
console.log(Object.prototype);
Object.goodbye();
