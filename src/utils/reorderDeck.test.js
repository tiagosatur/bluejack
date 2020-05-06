import { reorderDeck } from ".";

describe("reorderDeck function", () => {
  it("reorderDeck function should exist", () => {
    expect(typeof reorderDeck).toEqual("function");
  });

  it("must redorder the deck based on the rotation card param, since the suits have greater value, cards with the same suit should come first in the array ", () => {
    const rotationCard = "5S";
    const reordered = [
      "5S",
      "4S",
      "3S",
      "2S",
      "AS",
      "KS",
      "QS",
      "JS",
      "10S",
      "9S",
      "8S",
      "7S",
      "6S",
      "5H",
      "4H",
      "3H",
      "2H",
      "AH",
      "KH",
      "QH",
      "JH",
      "10H",
      "9H",
      "8H",
      "7H",
      "6H",
      "5D",
      "4D",
      "3D",
      "2D",
      "AD",
      "KD",
      "QD",
      "JD",
      "10D",
      "9D",
      "8D",
      "7D",
      "6D",
      "5C",
      "4C",
      "3C",
      "2C",
      "AC",
      "KC",
      "QC",
      "JC",
      "10C",
      "9C",
      "8C",
      "7C",
      "6C",
    ];

    expect(reorderDeck(rotationCard)).toEqual(reordered);
    expect(reorderDeck(rotationCard)[0].split("")[1]).toBe("S");
  });
});
