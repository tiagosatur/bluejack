const BASE_URL = `https://deckofcardsapi.com/api/deck`;
const NEW_DECK_URL = `${BASE_URL}/new`;
const DRAW_DECK_URL = (deck_id) => `${BASE_URL}/${deck_id}/draw/?count=52`;
const NEW_PILE_URL = (deck_id, pile_name, cards) =>
  `${BASE_URL}/${deck_id}/pile/${pile_name}/add/?cards=${cards}`;
const GET_PILE_URL = (deck_id, pile_name) =>
  `${BASE_URL}/${deck_id}/pile/${pile_name}/list`;

export { BASE_URL, NEW_DECK_URL, DRAW_DECK_URL, NEW_PILE_URL, GET_PILE_URL };
