<template>
  <div>
    <Header title="Let's play Blue Jack?" />
    <div class="d-flex flex-column align-items-center">
      <p>
        This are the suits order from greater to lower:
      </p>
      <p>
        H: Hearts, D: Diamonds, C: Clubs, S: Spades,
      </p>

      <p>
        This are the ranks order: 2, A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3.
      </p>
      <p>
        The rotation card determines the higher value. Suits have greater value
        than ranks.
      </p>
      <div>
        <div class="d-flex text-secondary">
          <b-card class="bj-input d-flex flex-column align-items-start mr-5">
            <strong>Input</strong>
            <p>
              Cards: 9C, 9H, 5S, 5C, 5H
            </p>
            <p>
              Rotation Card: 7D
            </p>
          </b-card>
          <b-card class="bj-output d-flex flex-column align-items-start">
            <strong>Output</strong>
            <p>
              Rotation Card: 7D
            </p>
            <p>
              Hight card: 5C
            </p>

            <p>
              Full house combos: 1. [ 5C 5S 5H 9C 9H ]
            </p>
          </b-card>
        </div>
      </div>
    </div>
    <router-link to="/deck/new" class="d-flex justify-content-center">
      <b-button variant="primary" class="btn-lg py-3 px-5 mt-5"
        >Start!</b-button
      >
    </router-link>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style>
.mt-10 {
  margin-top: 10rem;
}
</style>
