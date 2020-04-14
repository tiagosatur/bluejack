<template>
  <div class="py-5">
    <b-row>
      <b-col>
        <Header title="Choose your cards" />
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col>
        <b-form-input v-model="values.input01" maxlength="3" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input02" maxlength="3" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input03" maxlength="3" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input04" maxlength="3" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input05" maxlength="3" />
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col>
        <b-form-input v-model="values.input06" maxlength="3" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input07" maxlength="3" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input08" maxlength="3" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input09" maxlength="3" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input10" maxlength="3" />
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col class="d-flex align-items-center justify-content-end">
        <h4 class="m-0">Rotation card</h4>
      </b-col>
      <b-col class="d-flex justify-content-start">
        <b-form-input
          v-model="rotationCard"
          class="w-50"
          maxlength="3"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-button
          @click="handleCreateDeck"
          variant="primary"
          class="btn-lg mt-3"
        >
          Submit
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapState, mapActions } from "vuex";

export default {
  name: "NewPile",
  components: {
    Header,
  },
  data() {
    return {
      values: {
        input01: "",
        input02: "",
        input03: "",
        input04: "",
        input05: "",
        input06: "",
        input07: "",
        input08: "",
        input09: "",
        input10: "",
      },
      rotationCard: "",
    };
  },
  methods: {
    ...mapActions(["createDeck", "drawDeck", "addPile"]),
    async handleCreateDeck() {
      const stringifiedCardValues = Object.values(this.values)
        .filter((x) => typeof x === "string" && x.length > 0)
        .join();

      let newDeckId = await this.$store.dispatch("createDeck");
      await this.$store.dispatch("drawDeck");
      await this.$store.dispatch("addPile", {
        cards: stringifiedCardValues,
        rotationCard: this.rotationCard,
      });

      this.$router.push({
        path: `/deck/${newDeckId}`,
      });
    },
  },
  computed: {
    ...mapState({
      deckId: (state) => state.deck.deckId,
    }),
  },
};
</script>

<style></style>
