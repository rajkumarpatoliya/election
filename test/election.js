/* jshint esversion: 6 */
let Election = artifacts.require("./Election.sol");

contract("Election", (accounts) => {
    it("Initializes with two candidates", () => {
        return Election.deployed().then((instance) => {
            return instance.candidatesCount();
        }).then((count) => {
            assert.equal(count, 2);
        });
    });
});