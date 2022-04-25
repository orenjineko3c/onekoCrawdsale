//var MaqueToken = artifacts.require("./MaqueToken.sol");
var MaqueIco = artifacts.require("./MaqueIco.sol");

module.exports = function(deployer) {
  var tokenRate = 1000; // Token price is 0.001 BNB
  var catoshiAddress = "0xFC310d209c267F1b3b86669f253d66b8605CC429";
  var orenjinekoAddress = "0xE58335089ebb0c330ed2E0D66af7C5Ea892db65E";

  deployer.deploy(MaqueIco, tokenRate, catoshiAddress, orenjinekoAddress);
};