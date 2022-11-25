// making sure we're testing the correct js file

const Intern = require('../lib/intern');

// tests needing to be ran
describe("Intern", () => {
    describe("getProperties", () => {
        it("should return the given properties", () => {
            const internObj = new Intern("joe", 342, "joe@gmail.com", "Intern");
            expect(internObj.getName()).toEqual("joe");
            expect(internObj.getId()).toEqual(342);
            expect(internObj.getEmail()).toEqual("joe@gmail.com");
            expect(internObj.getRole()).toEqual("Intern");
        });
    });
});
// Can set school via constructo

//getRole() should return intern

// can get school via getSchool()