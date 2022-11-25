// making sure we're testing the correct js file
const Engineer = require('../lib/engineer');

// test needing to be ran against engineer
describe("Engineer", () => {
    describe("hasInfo", () => {
        it("should return the given info", () => {
            const engineerObj = new Engineer("alice", 342, "wonderland@gmail.com", "Engineer");
            expect(engineerObj.getName()).toEqual("alice");
            expect(engineerObj.getId()).toEqual(342);
            expect(engineerObj.getEmail()).toEqual("wonderland@gmail.com");
            expect(engineerObj.getRole()).toEqual("Engineer");
        });
    });
});
// can set github account via constructor

// getRole() should return engineer

// can get github username via getGithub()