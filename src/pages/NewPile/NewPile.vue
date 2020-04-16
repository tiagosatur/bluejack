<template>
  <div class="py-5">
    <Header title="CHOOSE YOUR CARDS" />

    <div>
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
            class="btn-lg my-3 test-id-handle-create-deck"
          >
            Submit
          </b-button>
        </b-col>
      </b-row>
    </div>

    <b-button
      @click="() => this.$router.push('/')"
      variant="link"
      class="mt-3 mr-3 d-block mx-auto"
    >
      Go back
    </b-button>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import { mapActions } from "vuex";

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
        .filter((symbol) => typeof symbol === "string" && symbol.length > 0)
        .join();

      try {
        const newDeckId = await this.createDeck();
        await this.drawDeck();
        await this.addPile({
          cards: stringifiedCardValues,
          rotationCard: this.rotationCard,
        });
        this.$router &&
          this.$router.push({
            path: `/deck/${newDeckId}`,
          });
      } catch (e) {
        console.log("handleCreateDeck error", e);
      }
    },
  },
};
</script>

<style></style>
