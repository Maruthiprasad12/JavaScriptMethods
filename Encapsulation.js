class Student {
  #name;
  #grade;

  constructor(name, grade) {
    this.#name = name;
    this.#grade = grade;
  }

  // Getter for name
  getName() {
    return this.#name;
  }

  // Setter for name
  setName(newName) {
    if (newName && newName.length > 1) {
      this.#name = newName;
    } else {
      console.log("Invalid name.");
    }
  }

  // Getter for grade
  getGrade() {
    return this.#grade;
  }

  // Setter for grade
  setGrade(newGrade) {
    const validGrades = ["A", "B", "C", "D", "F"];
    if (validGrades.includes(newGrade)) {
      this.#grade = newGrade;
    } else {
      console.log("Invalid grade. Must be A, B, C, D, or F.");
    }
  }
}

// Usage
const student1 = new Student("John", "B");

console.log(student1.getName());  // John
console.log(student1.getGrade()); // B

student1.setGrade("A");
console.log(student1.getGrade()); // A
