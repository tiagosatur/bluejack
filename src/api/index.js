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
    addPileService: ({ deckId, blueJackPile, cards }) => {
      return axios
        .get(NEW_PILE_URL(deckId, blueJackPile, cards))
        .then((res) => addPileMiddleware(res));
    },

    getPileService: ({ deckId, blueJackPile }) =>
      axios
        .get(GET_PILE_URL(deckId, blueJackPile))
        .then((res) => getPileMiddleware(res)),
    drawDeckService: (deckId) =>
      axios.get(DRAW_DECK_URL(deckId)).then((res) => res.data),
  },
};
