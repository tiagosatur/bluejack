import TYPES from "./types";
import api from "../api";

export default {
  createDeck: ({ commit }) => {
    commit(TYPES.CREATE_DECK_PENDING);
    return api.get
      .createDeckService()
      .then(async (res) => {
        !res.success && Promise.reject(res);
        commit(TYPES.CREATE_DECK_SUCCESS, res);
        return res.deckId;
      })
      .catch((e) => commit(TYPES.CREATE_DECK_FAIL, e));
  },
  drawDeck: ({ commit, state }) => {
    commit(TYPES.DRAW_DECK_PENDING);
    return api.get
      .drawDeckService(state.deck.deckId)
      .then((res) => {
        !res.success && Promise.reject(res);
        commit(TYPES.DRAW_DECK_SUCCESS);
        return res;
      })
      .catch((e) => commit(TYPES.DRAW_DECK_FAIL, e));
  },
  addPile: ({ commit, state }, { cards }) => {
    commit(TYPES.ADD_PILE_PENDING);
    return api.get
      .addPileService({
        deckId: state.deck.deckId,
        blueJackPile: state.pile.name.blueJackPile,
        cards,
      })
      .then((res) => {
        !res.success && Promise.reject(res);
        commit(TYPES.ADD_PILE_SUCCESS, res);
        return res;
      })
      .catch((e) => {
        commit(TYPES.ADD_PILE_FAIL, e);
        return e;
      });
  },
  getPile: ({ commit, state }, deckId) => {
    commit(TYPES.GET_PILE_PENDING);
    return api.get
      .getPileService({
        deckId,
        blueJackPile: state.pile.name.blueJackPile,
      })
      .then((res) => {
        !res.success && Promise.reject(res);
        commit(TYPES.GET_PILE_SUCCESS, res);
        return res;
      })
      .catch((e) => {
        commit(TYPES.GET_PILE_FAIL, e);
      });
  },
};
