pragma solidity ^0.8.0;

contract Token {
    string public name = "Hardhat Token";
    string public symbol = "HTT";
    uint public totalSupplay = 1000000;
    address public owner;
    mapping(address => uint) balances;

    constructor() {
        balances[msg.sender] = totalSupplay;
        owner = msg.sender;
    }

    function transfer(address to, uint amount) external {
        require(balances[msg.sender] >= amount, 'Not enough tokens');
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balaceOf(address account) external view returns(uint) {
        return balances[account];
    }
}