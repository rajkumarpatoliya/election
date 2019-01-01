pragma solidity ^0.5;

contract Election {
    // Model candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    // store candidates
    // fetch candidate
    mapping(uint => Candidate) public candidates;
    // store candidates count
    uint public candidatesCount;
    // constructor
    constructor () public {
        addCandidate("Shri Narendra Modiji");
        addCandidate("Shri Priyanka Gandhi");
    }
    function addCandidate(string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    } 
}