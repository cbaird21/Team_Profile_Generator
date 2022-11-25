// import the parent class
const Employee = require('../lib/employee');

// creating 'manager' class that extends the 'employee' class
class Manager extends Employee {
    constructor(name, id, email, className, officeNumber) {
        super(name, id, email, className)
        this.officeNumber = officeNumber;

    }
}
// must get getRole() overidden to say manager
module.exports = Manager;