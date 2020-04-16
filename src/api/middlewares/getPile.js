export default function getPileMiddleware(res) {
  const {
    data: {
      success: successRotationCard,
      piles: {
        rotationCardPile: { cards: rotationCardList },
      },
    },
  } = res[0];
  const {
    data: {
      success: successDefault,
      piles: {
        blueJackPile: { cards: defaultCards },
      },
    },
  } = res[1];

  return {
    cards: getCardsCode(defaultCards),
    rotationCard: rotationCardList[0].code || null,
    success:
      successRotationCard &&
      successDefault &&
      res[1].data.piles.blueJackPile &&
      res[0].data.piles.rotationCardPile,
  };
}

const getCardsCode = (cardsList) => cardsList.map((item) => item.code);
