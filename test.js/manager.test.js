// making sure we're testing the correct js file
const Manager = require('../lib/manager');

// test needing to be ran against manager
describe("Manager", () => {
    describe("getOfficeNum", () => {
        it("should return the new manager office number", () => {
            const officeNum = "101";

            const result = new Manager().getOfficeNum(officeNum);

            expect(result).toEqual(officeNum)
        });
    });
    describe("getRole", () => {
        it("should return the role of Manager", () => {
            const role = "Manager";

            const result = new Manager().getRole(role);

            expect(result).toEqual(role);
        });
    });
});
// can set office number via constructor argument

// getRole() should return manager

// can get office number via getOffice()
