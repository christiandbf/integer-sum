// O(n)
const findIntegerPairs = (numbers, sum) => {
  const pairs = new Map(),
    pairsFound = [];

  for (let number of numbers) {
    number = Number(number);
    const pairInNumbers = pairs.get(number);
    if (Number.isInteger(pairInNumbers)) {
      pairsFound.push([number, pairInNumbers]);
      continue;
    }
    const pair = sum - number;
    pairs.set(pair, number);
  }

  return pairsFound;
};

module.exports = {
  findIntegerPairs,
};
