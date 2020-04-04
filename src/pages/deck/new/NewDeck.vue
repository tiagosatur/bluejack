<template>
  <div class="py-5">
    <b-row>
      <b-col>
        <div class="d-flex mb-4">
          <h2>
            New Deck
          </h2>
        </div>
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col>
        <b-form-input v-model="values.input01" maxlength="2" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input02" maxlength="2" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input03" maxlength="2" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input04" maxlength="2" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input05" maxlength="2" />
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col>
        <b-form-input v-model="values.input06" maxlength="2" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input07" maxlength="2" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input08" maxlength="2" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input09" maxlength="2" />
      </b-col>
      <b-col>
        <b-form-input v-model="values.input10" maxlength="2" />
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col class="d-flex align-items-center justify-content-end">
        <h4 class="m-0">Rotation card</h4>
      </b-col>
      <b-col class="d-flex justify-content-start">
        <b-form-input
          v-model="values.inputRotationCard"
          class="w-50"
          maxlength="2"
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
import { mapState, mapActions } from "vuex";

export default {
  name: "NewDeck",
  components: {},
  data() {
    return {
      values: {
        inputRotationCard: "",
        input01: "",
        input02: "",
        input03: "",
        input04: "",
        input05: "",
        input06: "",
        input07: "",
        input08: "",
        input09: "",
        input10: ""
      }
    };
  },
  methods: {
    ...mapActions(["createDeck"]),
    handleCreateDeck() {
      this.$store.dispatch("createDeck");
    }
  },
  computed: {
    ...mapState({
      deckId: state => state.deck.deckId
    }),
    getDeckId() {
      return this.$store.getters.getDeckId;
    }
  },
  watch: {
    deckId(newValue, oldValue) {
      console.log("newValue", newValue, oldValue);
      this.$router.push({
        path: `/deck/${newValue}`,
        params: { deckId: newValue }
      });
    }
  }
  // beforeDestroy() {
  //   this.unwatch();
  // }
};
</script>

<style></style>
