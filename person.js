class Person {
  constructor(name) {
    this.name = name;
  }
  sayMyName() {
    return `My name: ${this.name}`;
  }
}

// module.exports = Person;
module.exports = {
  Person: Person,
};
