// import the parent class
const Employee = require('../lib/employee');

// creating 'manager' class that extends the 'employee' class
class Intern extends Employee {
    constructor(name, id, email, className, school) {
        super(name, id, email, className)
        this.school = school;
    }
    // creating function to pull school name
}
// must get getRole() overidden to say intern

module.exports = Intern;