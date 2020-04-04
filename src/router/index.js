import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home/Home";
import NewDeck from "@/pages/deck/new/NewDeck";
import ViewDeck from "@/pages/deck/view/ViewDeck";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/deck/new",
      name: "New Deck",
      component: NewDeck
    },
    {
      path: "/deck/:deckId",
      name: "View Deck",
      component: ViewDeck
    }
  ],
  mode: "history"
});
