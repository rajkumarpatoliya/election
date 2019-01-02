pragma solidity ^0.5;

contract Election {
    // Model candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    // store accounts that have voted
    mapping(address => bool) public voters;
    // store candidates
    // fetch candidate
    mapping(uint => Candidate) public candidates;
    // store candidates count
    uint public candidatesCount;
    // voted event
    event votedEvent (
        uint indexed _candidateId
    );
    // constructor
    constructor () public {
        addCandidate("Shri Narendra Modiji");
        addCandidate("Shri Priyanka Gandhi");
    }
    function addCandidate(string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    } 
    function vote (uint _candidateId) public {
        // check candidate haven't voted before
        require(!voters[msg.sender]);
        // authorize the candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        // recording user vote
        voters[msg.sender] = true;
        // update candidate vote count
        candidates[_candidateId].voteCount ++;
        // trigger voted event
        emit votedEvent(_candidateId);
    }
}