// import the parent class
const Employee = require('../lib/employee');

// creating 'manager' class that extends the 'employee' class
class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email, role)
        this.gitHub = github;
    }
    // creating function to pull github username
    getGithub() {
        return this.github;
    }
    getRole() {
        this.role = 'Engineer';
        return this.role;
    }
}
// must get getRole() overidden to say enginner
module.exports = Engineer;