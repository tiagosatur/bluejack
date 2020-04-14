import Vue from "vue";
import TYPES from "./types";

export default {
  [TYPES.CREATE_DECK_PENDING](state) {
    state.deck.isDeckLoading = true;
    state.deck.deckId = "";
    state.deck.error = "";
  },
  [TYPES.CREATE_DECK_SUCCESS](state, payload) {
    state.deck.isDeckLoading = false;
    state.deck.deckId = payload.deckId;
  },
  [TYPES.CREATE_DECK_FAIL](state, error) {
    state.deck.error = error;
  },

  [TYPES.DRAW_DECK_PENDING](state) {
    state.deck.isDeckLoading = true;
  },
  [TYPES.DRAW_DECK_SUCCESS](state) {
    state.deck.isDeckLoading = false;
  },
  [TYPES.DRAW_DECK_FAIL](state, error) {
    state.deck.isDeckLoading = false;
    state.deck.error = error;
  },

  [TYPES.ADD_PILE_PENDING](state) {
    state.pile.isPileLoading = true;
    state.pile.cards = [];
    state.pile.rotationCard = null;
  },
  [TYPES.ADD_PILE_SUCCESS](state) {
    state.pile.isPileLoading = false;
  },
  [TYPES.ADD_PILE_FAIL](state, error) {
    state.pile.error = error;
    state.pile.isPileLoading = false;
    state.pile.cards = [];
  },

  [TYPES.GET_PILE_PENDING](state) {
    state.pile.error = "";
    state.pile.isPileLoading = true;
    state.pile.cards = [];
  },
  [TYPES.GET_PILE_SUCCESS](state, payload) {
    state.pile.isPileLoading = false;
    Vue.set(state.pile, "cards", [...payload.cards]);
    state.pile.rotationCard = payload.rotationCard;
  },
  [TYPES.GET_PILE_FAIL](state, error) {
    state.pile.error = "We couldn't fetch the cards, try again please :(";
    console.log("GET PILE FAIL ERROR -->", error);
    state.pile.isPileLoading = false;
  },
};
