/* jshint esversion: 6 */
var Election = artifacts.require("./Election.sol");

module.exports = (deployer) => {
  deployer.deploy(Election);
};
