import PLAYBOOK from "./playbook";

export default function (suit) {
  switch (suit) {
    case PLAYBOOK.SUITS_OBJ.HEARTS:
      return "♥";
    case PLAYBOOK.SUITS_OBJ.DIAMONDS:
      return "♦";
    case PLAYBOOK.SUITS_OBJ.CLUBS:
      return "♣";
    case PLAYBOOK.SUITS_OBJ.SPADES:
      return "♠";
    default:
      return "";
  }
}
