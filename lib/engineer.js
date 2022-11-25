// import the parent class
const Employee = require('../lib/employee');

// creating 'manager' class that extends the 'employee' class
class Engineer extends Employee {
    constructor(name, id, email, className, gitHub) {
        super(name, id, email, className)
        this.gitHub = gitHub;
    }
    // creating function to pull github username

}
// must get getRole() overidden to say enginner
module.exports = Engineer;