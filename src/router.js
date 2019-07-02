import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PokemonDetail from "./views/PokemonDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/pokemon/:id",
      name: "pokemon_details",
      component: PokemonDetail
    }
  ]
});
