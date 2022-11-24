// making sure we're testing the correct js file
const Employee = require('../lib/employee');

// test needing to be run against employee
describe("Employee", () => {
    describe("getName", () => {
        it("should return new string", () => {
            const name = "Chandler";

            const result = new Employee().getName(name);

            expect(result).toEqual(name);
        });
    });
    describe("getId", () => {
        it("should return new id", () => {
            const id = "245";

            const result = new Employee().getId(id);

            expect(result).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should return new email ", () => {
            const email = "test@fakemail.com";

            const result = new Employee().getEmail(email);

            expect(result).toEqual(email);
        });
    });
    describe("getRole", () => {
        it("should return new role", () => {
            const role = "Employee";

            const result = new Employee().getRole(role);

            expect(result).toEqual(role);
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