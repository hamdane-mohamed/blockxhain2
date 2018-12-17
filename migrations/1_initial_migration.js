var Migrations = artifacts.require("./Migrations.sol");
var Payment = artifacts.require("./Payment.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Payment);
};
