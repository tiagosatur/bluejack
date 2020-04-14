export default function (cards, reorderedDeck) {
  const cardsIndexInDeck = cards.map((value) => {
    const index = reorderedDeck.indexOf(value);
    return {
      index,
      value,
    };
  });

  const reorderedUserCards = cardsIndexInDeck
    .sort((a, b) => {
      return a.index - b.index;
    })
    .map((item) => item.value);

  return {
    reorderedUserCards,
    highCard: reorderedUserCards[0] || "",
  };
}
