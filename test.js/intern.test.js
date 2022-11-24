// making sure we're testing the correct js file

const Intern = require('../lib/intern');

// tests needing to be ran
describe("Intern", () => {
    describe("getSchool", () => {
        it("should return a new intern school", () => {
            const school = "DU";

            const result = new Intern().getSchool(school);

            expect(result).toEqual(school);
        })
    })
    describe("getRole", () => {
        it("should return new role", () => {
            const role = "Intern";
            const result = new Intern().getRole(role);

            expect(result).toEqual(role);

        });

    })
})
// Can set school via constructo

//getRole() should return intern

// can get school via getSchool()