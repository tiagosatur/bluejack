import { reorderUserCards, reorderDeck } from ".";

describe("reorderUserCards function", () => {
  it("should exist", () => {
    expect(typeof reorderUserCards).toEqual("function");
  });

  it("", () => {
    const rotationCard = "5S";
    const deck = reorderDeck(rotationCard);
    const cardsInput = ["AD", "AH", "5S", "8D", "2C"];
    const reorderedResult = ["5S", "AH", "AD", "8D", "2C"];
    const { reorderedUserCards } = reorderUserCards(cardsInput, deck);

    expect(reorderedUserCards).toEqual(reorderedResult);
  });

  it("", () => {
    const rotationCard = "5S";
    const deck = reorderDeck(rotationCard);
    const cardsInput = ["AD", "AH", "5S", "8D", "2C"];
    const highCardResult = "5S";
    const { highCard } = reorderUserCards(cardsInput, deck);

    expect(highCard).toEqual(highCardResult);
  });
});
