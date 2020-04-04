import TYPES from "./types";
import api from "../api";

export default {
  createDeck: ({ commit }) => {
    commit(TYPES.CREATE_DECK_PENDING);
    return api.post.createDeckService
      .then(res => {
        !res.success && Promise.reject(res);
        commit(TYPES.CREATE_DECK_SUCCESS, res);
      })
      .catch(e => commit(TYPES.CREATE_DECK_FAIL, e));
  }
};
