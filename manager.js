// import the parent class
const employee = require('./employee');

// creating 'manager' class that extends the 'employee' class
class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber)
        this.officeNumber = officeNumber
    }
}
// must get getRole() overidden to say manager
module.exports = manager;