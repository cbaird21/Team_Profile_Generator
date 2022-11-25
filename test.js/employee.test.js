// making sure we're testing the correct js file
const Employee = require('../lib/employee');

// test needing to be run against employee
describe("Employee", () => {
    describe("hasName", () => {
        it("should return given name", () => {
            const employeeObj = new Employee("chandler", 234, "chandler@gmail.com", "Employee");


            expect(employeeObj.getName()).toEqual("chandler");
            expect(employeeObj.getId()).toEqual(234);
            expect(employeeObj.getEmail()).toEqual("chandler@gmail.com");
            expect(employeeObj.getRole()).toEqual("Employee");
        });
    });
});
    // can initate employee instance
    // const id = "456";
    // const email ="test.email.com"
    // const role = "manager"

// can set name via constructor arguments

// can set id via constrcutor arguments

// can set email via constructor arguments

// can get name via getName()

// can get id via getId()

// can get email via getEmail()

// getRole() should return employee