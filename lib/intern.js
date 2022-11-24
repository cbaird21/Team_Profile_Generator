// import the parent class
const Employee = require('../lib/employee');

// creating 'manager' class that extends the 'employee' class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school)
        this.school = school;
    }
    // creating function to pull school name
    getSchool() {
    }
    getRole() {
        this.role = 'Intern';
        return this.role;
    }
}
// must get getRole() overidden to say intern

module.exports = Intern;