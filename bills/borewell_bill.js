const config = require("../config/config");

const borewellBill = (unitCost, ratio) => {
  return unitCost * ratio * config.COSTS.BORWELL_WATER;
};

module.exports = borewellBill;
