const config = require("../config/config");
const borewellBill = require("./borewell_bill");
const corporationBill = require("./corporation_bill");
const tankerBill = require("./tanker_bill");

const generateBill = (filedata) => {
  let noOfPeople = 0;
  let totalCost = 0;
  let totalWaterConsumed = 0;
  let totalWaterConsumedByGuests = 0;
  let unitCost = 0;
  let ratio = [];

  try {
    filedata.forEach((data) => {
      const input = data.trim().split(" ");

      if (input[0] === config.INPUT_COMMANDS.ALLOT_WATER) {
        if (input[1] === "2") {
          noOfPeople = config.NO_OF_PEOPLE["2BHK"];
        } else {
          noOfPeople = config.NO_OF_PEOPLE["3BHK"];
        }
        totalWaterConsumed +=
          noOfPeople * config.WATER_ALLOTED_PER_DAY * config.NO_OF_DAYS;
        ratio = input[2].split(":").map(Number);
        let ratioSum = ratio[0] + ratio[1];
        unitCost = totalWaterConsumed / ratioSum;
      }
      if (input[0] === config.INPUT_COMMANDS.ADD_GUESTS) {
        noOfPeople = Number(input[1]);
        let waterConsumed =
          noOfPeople * config.WATER_ALLOTED_PER_DAY * config.NO_OF_DAYS;
        totalWaterConsumedByGuests += waterConsumed;
        totalWaterConsumed += waterConsumed;
      }
    });
    totalCost = Math.round(
      corporationBill(unitCost, ratio[0]) +
        borewellBill(unitCost, ratio[1]) +
        tankerBill(totalWaterConsumedByGuests)
    );
    return { totalWaterConsumed, totalCost };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = generateBill;
