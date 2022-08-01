const { findIntegerPairs } = require("./service");

describe("Pairs of integers", () => {
  it("finds pairs of integers from a list that sum to a given value", () => {
    expect(findIntegerPairs([1, 9, 5, 0, 20, -4, 12, 16, 7], 12)).toEqual([
      [12, 0],
      [16, -4],
      [7, 5],
    ]);
  });
});
