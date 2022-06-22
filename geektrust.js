const fs = require("fs");
const generateBill = require("./bills/generate_bill");

const filepath = process.argv[2];

if (!filepath) {
  console.log(
    "No Input file provided. Use node geektrust.js <Input file path>"
  );
  return;
}

if (!fs.existsSync(filepath)) {
  console.log(
    "No Input file found at the specified path, Please provide the correct path"
  );
  return;
}

try {
  const data = fs.readFileSync(filepath, { encoding: "utf8", flag: "r" });
  var filedata = data.toString().trim().split("\n");
  let { totalWaterConsumed, totalCost } = generateBill(filedata);
  console.log(totalWaterConsumed, totalCost);
} catch (error) {
  console.log(error.message);
}
