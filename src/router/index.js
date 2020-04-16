import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home/Home";
import NewPile from "@/pages/NewPile/NewPile";
import ViewPile from "@/pages/ViewPile/ViewPile";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/deck/new",
      name: "New Pile",
      component: NewPile,
    },
    {
      path: "/deck/:deckId",
      name: "View Pile",
      component: ViewPile,
    },
  ],
  mode: "history",
});
