// test command: node app 1,9,5,0,20,-4,12,16,7 12

const { findIntegerPairs } = require("./service");

const numbers = String(process.argv[2]).split(",");
const sum = parseInt(process.argv[3]);

const pairs = findIntegerPairs(numbers, sum);

for (const pair of pairs) {
  console.log(`${pair[0]} ${pair[1]}`);
}
