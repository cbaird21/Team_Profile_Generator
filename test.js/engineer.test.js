// making sure we're testing the correct js file
const Engineer = require('../lib/engineer');

// test needing to be ran against engineer
describe("Engineer", () => {
    describe("getGithub", () => {
        it("should return the new engineer github", () => {
            const gitHub = "Cbaird21";

            const result = new Engineer().getGithub(gitHub);

            expect(result).toEqual(gitHub);
        });
    });
    describe("getRole", () => {
        it("should return new role", () => {
            const role = "Engineer";
            const result = new Engineer().getRole(role);

            expect(result).toEqual(role);

        });

    })
});
// can set github account via constructor

// getRole() should return engineer

// can get github username via getGithub()