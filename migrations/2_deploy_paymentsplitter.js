const PaymentSplitter = artifacts.require("PaymentSplitter");

module.exports = function(deployer) {
  deployer.deploy(PaymentSplitter, ['0x54688E3d1C2A9F03c7c73f85f80C6b48F7546b8F', '0xF144cB01033F58400E290970eF4975852509B3c5'], [40, 60]);
};
