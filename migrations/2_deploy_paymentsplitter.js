const PaymentSplitter = artifacts.require("PaymentSplitter");

module.exports = function(deployer) {
  deployer.deploy(PaymentSplitter, ['0x94AF10Cb6fdC971cf1861206B40B55d5716FBBDe', '0x00D5d0Fb287ed5D492F185604333aD80ce0E58Df'], [123, 321]);
};
