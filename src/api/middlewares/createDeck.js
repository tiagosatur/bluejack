export default function({ data }) {
  return {
    deckId: data.deck_id,
    success: data.success
  };
}
