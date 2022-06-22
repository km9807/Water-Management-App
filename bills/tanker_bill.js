const config = require("../config/config");

const tankerBill = (totalWaterConsumedByGuests) => {
  let totalCost = 0;
  let slabs = Object.keys(config.COSTS.TANKER_COST);
  let init = 0;

  for (let i = 0; i < slabs.length - 1; i++) {
    let difference = Number(slabs[i]) - init;
    if (totalWaterConsumedByGuests > difference) {
      totalCost += difference * config.COSTS.TANKER_COST[slabs[i]];
      totalWaterConsumedByGuests = totalWaterConsumedByGuests - difference;
    } else {
      totalCost +=
        totalWaterConsumedByGuests * config.COSTS.TANKER_COST[slabs[i]];
      totalWaterConsumedByGuests = 0;
    }
    init = slabs[i];
  }
  if (totalWaterConsumedByGuests > 0) {
    totalCost +=
      totalWaterConsumedByGuests * config.COSTS.TANKER_COST["3001+L"];
  }
  return totalCost;
};

module.exports = tankerBill;
