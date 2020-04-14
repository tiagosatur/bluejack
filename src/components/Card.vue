<template>
  <div class="bj-card">
    <div class="bj-card__top">
      <span class="bj-card__number">
        {{ number }}
      </span>
      <span class="bj-card__suit" v-html="suit"></span>
    </div>
    <div class="bj-card__bottom">
      <span class="bj-card__number">
        {{ number }}
      </span>
      <span class="bj-card__suit" v-html="suit"> </span>
    </div>
  </div>
</template>

<script>
import PLAYBOOK from "@/utils/playbook";

export default {
  name: "NewDeck",
  data() {
    return {
      number: "1",
      suit: null,
    };
  },
  props: ["value"],
  methods: {
    setValues() {
      const splittedValue = this.value.split("");
      this.number = splittedValue[0];

      this.suit = this.switchSuit(splittedValue[1]);
    },
    switchSuit(suit) {
      switch (suit) {
        case PLAYBOOK.SUITS_OBJ.HEARTS:
          return "&#9829;";
        case PLAYBOOK.SUITS_OBJ.DIAMONDS:
          return "&#9830;";
        case PLAYBOOK.SUITS_OBJ.CLUBS:
          return "&#9827;";
        case PLAYBOOK.SUITS_OBJ.SPADES:
          return "&#9824;";
        default:
          return "";
      }
    },
  },
  mounted() {
    this.setValues();
  },
};
</script>

<style lang="scss">
.bj-card {
  background-color: #fff;
  border-radius: 0.4rem;
  color: black;
  display: flex;
  flex-flow: column;
  line-height: 1;
  justify-content: space-between;
  min-height: 320px;
  margin: 8px;
  padding: 12px 16px;
  width: 216px;

  &__bottom,
  &__top {
    align-items: center;
    display: flex;
  }

  &__bottom {
    transform: rotate(180deg);
  }

  &__number {
    font-size: 40px;
    font-weight: bold;
    margin-right: 8px;
  }

  &__suit {
    font-size: 50px;
    margin: 0 0 8px 0;
  }
}
</style>
