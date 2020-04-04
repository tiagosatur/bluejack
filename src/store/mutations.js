import TYPES from "./types";

export default {
  [TYPES.CREATE_DECK_PENDING](state) {
    state.deck.isDeckLoading = true;
  },
  [TYPES.CREATE_DECK_SUCCESS](state, payload) {
    state.deck.isDeckLoading = false;
    state.deck.deckId = payload.deckId;
  },
  [TYPES.CREATE_DECK_FAIL](state, error) {
    state.deck.error = error;
  }
};
