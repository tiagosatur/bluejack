import axios from "axios";
import { NEW_DECK_URL } from "./endpoints";
import { createDeckMiddleware } from "./middlewares";

export default {
  post: {
    createDeckService: axios
      .post(NEW_DECK_URL)
      .then(res => createDeckMiddleware(res))
  }
};
