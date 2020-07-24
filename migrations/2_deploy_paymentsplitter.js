const PaymentSplitter = artifacts.require("PaymentSplitter");

module.exports = function(deployer) {
  deployer.deploy(PaymentSplitter, ['0x8128880DC48cde7e471EF6b99d3877357bb93f01'], [123]);
};
