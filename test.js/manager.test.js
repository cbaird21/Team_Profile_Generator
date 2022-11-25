// making sure we're testing the correct js file
const Manager = require('../lib/manager');

// test needing to be ran against manager
describe("Manager", () => {
    describe("getProperties", () => {
        it("should return the given properties", () => {
            const managerObj = new Manager("Bob", 342, "Bob@gmail.com", "Manager");
            expect(managerObj.getName()).toEqual("Bob");
            expect(managerObj.getId()).toEqual(342);
            expect(managerObj.getEmail()).toEqual("Bob@gmail.com");
            expect(managerObj.getRole()).toEqual("Manager");
        });
    });
});