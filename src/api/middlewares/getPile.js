export default function getPileMiddleware(res) {
  const {
    data: {
      success,
      piles: {
        blueJackPile: { cards: defaultCards },
      },
    },
  } = res;
  const allCards = getCardsCode(defaultCards);
  const cards = allCards.slice(1);
  const rotationCard = allCards.slice(0, 1)[0];

  return {
    cards,
    rotationCard,
    success: success && res.data.piles.blueJackPile,
  };
}

const getCardsCode = (cardsList) => cardsList.map((item) => item.code);
