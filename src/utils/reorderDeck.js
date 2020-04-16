import PLAYBOOK from "./playbook";

export default function (rotationCard) {
  const getSlicedReorderedCards = (cardType, startIndexSlice) => {
    const index = PLAYBOOK[cardType].indexOf(rotationCard[startIndexSlice]);

    const start = PLAYBOOK[cardType].slice(0, index);
    const end = PLAYBOOK[cardType].slice(index);

    return [...end, ...start];
  };

  const orderedNumbers = getSlicedReorderedCards("RANKS_ARR", 0);
  const orderedSuits = getSlicedReorderedCards("SUITS_ARR", 1);

  const reorderedDeck = orderedSuits.reduce((accumulator, a1) => {
    orderedNumbers.forEach((a2) => {
      accumulator.push(a2 + a1);
    });
    return accumulator;
  }, []);

  return reorderedDeck;
}
