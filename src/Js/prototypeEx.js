//

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

// Adding a method to the prototype of the Person constructor
Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

const p = new Person('Shivu', 'omkari');


console.log(p.getFullName())

// Create a constructor function for the Student object
function Student(firstName, lastName, studentId) {
    Person.call(this, firstName, lastName);
    this.studentId = studentId;
}

const s = new Student('s', 'n', 3);
console.log(s)

// Set up prototype inheritance from Person to Student
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // Reset the constructor property

// Add a method to the Student prototype
Student.prototype.getStudentInfo = function () {
    return this.getFullName() + ", Student ID: " + this.studentId;
}
const ss = new Student('gline', 'maxi', 10)
console.log(ss.getStudentInfo())
console.log(ss)