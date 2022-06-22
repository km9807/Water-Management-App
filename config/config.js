const config = {
  NO_OF_DAYS: 30,
  WATER_ALLOTED_PER_DAY: 10,
  NO_OF_PEOPLE: {
    "2BHK": 3,
    "3BHK": 5,
  },
  COSTS: {
    CORPORATION_WATER: 1,
    BORWELL_WATER: 1.5,
    TANKER_COST: {
      500: 2,
      1500: 3,
      3000: 5,
      "3001+L": 8,
    },
  },
  INPUT_COMMANDS: {
    ALLOT_WATER: "ALLOT_WATER",
    ADD_GUESTS: "ADD_GUESTS",
    BILL: "BILL",
  },
};

module.exports = config;
