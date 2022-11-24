// import the parent class
const Employee = require('../lib/employee');

// creating 'manager' class that extends the 'employee' class
class Manager extends Employee {
    constructor(name, id, email, role, officeNum) {
        super(name, id, email, role)
        this.officeNum = officeNum;

    }
    getOfficeNum() {
        return this.officeNum;
    }
    getRole() {
        this.role = 'Manager';
        return this.role;
    }
}
// must get getRole() overidden to say manager
module.exports = Manager;