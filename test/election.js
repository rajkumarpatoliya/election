/* jshint esversion: 6 */
let Election = artifacts.require("./Election.sol");

contract("Election", (accounts) => {

    let electionInstance;

    it("Initializes with two candidates", () => {
        return Election.deployed().then((instance) => {
            return instance.candidatesCount();
        }).then((count) => {
            assert.equal(count, 2);
        });
    });

    it("It initializes the candidates with correct values", () => {
        return Election.deployed().then((instance) => {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then((candidate) => {
            assert.equal(candidate[0], 1, "contains the correct id");
            assert.equal(candidate[1], "Shri Narendra Modiji", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
            return electionInstance.candidates(2);
        }).then((candidate) => {
            assert.equal(candidate[0], 2, "contains the correct id");
            assert.equal(candidate[1], "Shri Priyanka Gandhi", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
        });
    });

    it("Allows a voter to cast a vote", ()=> {
        return Election.deployed().then((instance) => {
            electionInstance = instance;
            candidateId=1;
            return electionInstance.vote(candidateId, {from: accounts[0]});
        }).then((receipt) => {
            return electionInstance.voters(accounts[0]);
        }).then((voted) => {
            assert(voted, "the voter has marked as voted");
            return electionInstance.candidates(candidateId);
        }).then((candidate) => {
            let voteCount = candidate[2];
            assert.equal(voteCount, 1, "Increments the candidate's vote count");
        });
    });
});