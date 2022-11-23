// import the parent class
const employee = require('./employee');

// creating 'manager' class that extends the 'employee' class
class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email, school)
        this.school = school;
    }
    // creating function to pull school name
    getSchool() {

    }
}
// must get getRole() overidden to say intern
module.exports = intern;