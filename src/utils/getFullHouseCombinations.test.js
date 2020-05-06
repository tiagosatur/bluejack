import getFullHouseCombinations from "./getFullHouseCombinations";

describe("getFullHouseCombinations function", () => {
  it("getFullHouseCombinations function should exist", () => {
    expect(typeof getFullHouseCombinations).toEqual("function");
  });

  it("returns one item array combo", () => {
    const userCards = ["2S", "2D", "2C", "3H", "3D"];
    expect(getFullHouseCombinations(userCards)).toEqual(["2S, 2D, 2C, 3H, 3D"]);
  });

  it("returns one item array combo passing fourth argument", () => {
    const userCards = ["2H", "2S", "2D", "2C", "3H", "3D"];
    const expected = [
      "2H, 2S, 2D, 3H, 3D",
      "2S, 2D, 2C, 3H, 3D",
      "2D, 2C, 2H, 3H, 3D",
      "2C, 2H, 2S, 3H, 3D",
    ];
    expect(getFullHouseCombinations(userCards)).toEqual(expected);
  });
});
