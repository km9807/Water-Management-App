const config = require("../config/config");

const corporationBill = (unitCost, ratio) => {
  return unitCost * ratio * config.COSTS.CORPORATION_WATER;
};

module.exports = corporationBill;
