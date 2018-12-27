// Create a Person Class
class Person {
  // Setup constructor
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// Create Subclass Person
class Student extends Person {
  // Setup constructor
  constructor(name, age, major) {
    // Inherit 'name' and 'age' from parent so we don't have to type it again
    super(name, age);
    // Set major to major input
    this.major = major;
  }
  hasMajor() {
    // Check if student has major
    return !!this.major;
  }
  getDescription() {
    // Set description to parent getDescription method
    let description = super.getDescription();

    // If studnet has a major, add to end of description
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am 'name'. I'm visiting from 'homeLocation'
// 2. Hi. I am 'name'.

const me = new Traveler('Kevin', 18, 'Atlanta');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other);