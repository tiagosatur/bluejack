const BASE_URL = `https://deckofcardsapi.com/api/deck`;
const NEW_DECK_URL = `${BASE_URL}/new`;
const ADD_PILE_URL = (deck_id, pile_name, cards) =>
  `${BASE_URL}/${deck_id}/pile/${pile_name}/add/?cards=${cards}`;

export { BASE_URL, NEW_DECK_URL, ADD_PILE_URL };
