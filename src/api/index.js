import axios from "axios";

import {
  NEW_DECK_URL,
  DRAW_DECK_URL,
  NEW_PILE_URL,
  GET_PILE_URL,
} from "./endpoints";
import {
  createDeckMiddleware,
  getPileMiddleware,
  addPileMiddleware,
} from "./middlewares";

export default {
  post: {},
  get: {
    createDeckService: () =>
      axios.get(NEW_DECK_URL).then((res) => createDeckMiddleware(res)),
    addPileService: ({
      deckId,
      rotationCardPile,
      blueJackPile,
      cards,
      rotationCard,
    }) => {
      return axios
        .all([
          axios.get(NEW_PILE_URL(deckId, rotationCardPile, rotationCard)),
          axios.get(NEW_PILE_URL(deckId, blueJackPile, cards)),
        ])
        .then((res) => addPileMiddleware(res));
    },

    getPileService: ({ deckId, rotationCardPile, blueJackPile }) =>
      axios
        .all([
          axios.get(GET_PILE_URL(deckId, rotationCardPile)),
          axios.get(GET_PILE_URL(deckId, blueJackPile)),
        ])
        .then((res) => getPileMiddleware(res)),
    drawDeckService: (deckId) =>
      axios.get(DRAW_DECK_URL(deckId)).then((res) => res.data),
  },
};
