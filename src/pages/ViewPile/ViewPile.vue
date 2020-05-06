<template>
  <div>
    <Header title="ORDERED PILE" />

    <b-alert v-model="showError" variant="danger" dismissible>
      {{ errorMessage }}
    </b-alert>
    <Spinner v-if="isPileLoading" />

    <ul
      v-if="cards.length > 0"
      class="bj-card-list d-flex justify-content-center"
    >
      <li v-for="(card, index) in reorderedUserCards" v-bind:key="index">
        <Card :value="card" />
      </li>
    </ul>

    <div class="bj-card-summary card w-100 mt-5">
      <p>
        <span class="bj-card-summary__label">Rotation card:</span>
        <span>{{ rotationCard }}</span>
      </p>
      <p>
        <span class="bj-card-summary__label">High card:</span>
        <span>{{ highCard }}</span>
      </p>
      <p>
        <span class="bj-card-summary__label">Full house combo:</span>
        <span v-if="fullHouseCombos.length === 0">None</span>
      </p>
      <div
        class="d-flex justify-content-center"
        v-if="fullHouseCombos.length > 0"
      >
        <ol class="bj-fullhouse-list">
          <li v-for="(combo, index) in fullHouseCombos" v-bind:key="index">
            {{ combo }}
          </li>
        </ol>
      </div>
    </div>
    <b-button @click="handleGoBack" variant="primary" class="btn-lg mt-3">
      Go back
    </b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Card from "@/components/Card/Card";
import Spinner from "@/components/Spinner/Spinner";
import Header from "@/components/Header/Header";

import {
  reorderDeck,
  reorderUserCards,
  getFullHouseCombinations,
} from "@/utils";

export default {
  name: "ViewPile",
  components: {
    Card,
    Header,
    Spinner,
  },
  data() {
    return {
      deckId: null,
      reorderedDeck: [],
      reorderedUserCards: [],
      highCard: null,
      fullHouseCombos: [],
    };
  },
  computed: {
    ...mapState({
      cards: (state) => state.pile.cards,
      rotationCard: (state) => state.pile.rotationCard,
      isPileLoading: (state) => state.pile.isPileLoading,
      errorMessage: (state) => state.pile.error,
      showError() {
        return this.errorMessage.length > 0;
      },
    }),
  },
  methods: {
    ...mapActions(["getPile"]),
    handleGoBack() {
      return this.$router.go(-1);
    },
  },
  created() {
    this.deckId = this.$route.params.deckId;
  },
  beforeDestroy() {
    this.deckId = null;
  },
  watch: {
    deckId() {
      setTimeout(this.$store.dispatch("getPile", this.deckId), 1000);
    },
    cards() {
      if (this.rotationCard) {
        this.reorderedDeck = reorderDeck(this.rotationCard);

        const { reorderedUserCards, highCard } = reorderUserCards(
          this.cards,
          this.reorderedDeck
        );

        this.reorderedUserCards = reorderedUserCards;
        this.highCard = highCard;
      }
    },
    reorderedUserCards() {
      this.fullHouseCombos = getFullHouseCombinations(this.reorderedUserCards);
    },
  },
};
</script>

<style lang="scss">
.bj-card-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.bj-card-summary {
  color: black;
  padding: 1.6rem;

  &__label {
    font-weight: bold;
    margin: 0 4px 0 0;
  }
}
.bj-fullhouse-list {
  width: fit-content;
}
</style>
