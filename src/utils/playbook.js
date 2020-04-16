const SUITS = {
  HEARTS: "H",
  DIAMONDS: "D",
  CLUBS: "C",
  SPADES: "S",
};
const RANKS = {
  TWO: "2",
  A: "A",
  K: "K",
  Q: "Q",
  J: "J",
  TEN: "10",
  NINE: "9",
  EIGHT: "8",
  SEVEN: "7",
  SIX: "6",
  FIVE: "5",
  FOUR: "4",
  THREE: "3",
};

export default {
  SUITS_OBJ: { ...SUITS },
  SUITS_ARR: [SUITS.HEARTS, SUITS.DIAMONDS, SUITS.CLUBS, SUITS.SPADES],
  RANKS_ARR: [
    RANKS.TWO,
    RANKS.A,
    RANKS.K,
    RANKS.Q,
    RANKS.J,
    RANKS.TEN,
    RANKS.NINE,
    RANKS.EIGHT,
    RANKS.SEVEN,
    RANKS.SIX,
    RANKS.FIVE,
    RANKS.FOUR,
    RANKS.THREE,
  ],
};
