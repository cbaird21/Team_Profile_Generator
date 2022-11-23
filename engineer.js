// import the parent class
const employee = require('./employee');

// creating 'manager' class that extends the 'employee' class
class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email, github)
        this.gitHub = github;
    }
    // creating function to pull github username
    getGithub() {

    }
}
// must get getRole() overidden to say enginner
module.exports = engineer;