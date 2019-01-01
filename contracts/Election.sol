pragma solidity ^0.5;

contract Election {
    // Model candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    // struct candidate
    // store candidate
    // fetch candidate
    mapping(uint => Candidate) public candidates;
    // constructor
    constructor () public {

    }
}