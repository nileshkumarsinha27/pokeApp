<template>
  <div class="grid-container">
    <ul class="list" v-if="data.length > 0">
      <li
        v-for="item in data"
        v-bind:key="item.entry_number"
        v-on:click="clickHandle(item.pokemon_species.url, item.entry_number)"
      >
        {{ item.pokemon_species.name }}
      </li>
    </ul>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>
<script>
import Store from "@/store.js";
import Router from "@/router.js";
import Loader from "@/components/loader";
import { mapGetters } from "vuex";
export default {
  name: "dataGrid",
  methods: {
    clickHandle: function(url, id) {
      if (url) {
        localStorage.setItem("pokeUrl", url);
        Store.dispatch("setPokeUrl", url);
        Router.push(`/pokemon/${id}`);
      }
    }
  },
  computed: mapGetters({
    data: "data",
    regionUrl: "regionUrl"
  }),
  components: {
    Loader
  }
};
</script>
<style lang="scss" scoped>
.list {
  margin: 15px 0;
  li {
    display: inline-grid;
    width: 18%;
    margin: 10px 2%;
    height: 15px;
    padding: 15px 0;
    color: #969ba0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
    text-align: center;
    &:hover {
      transform: scale(1.1);
      color: #000;
    }
  }
}
.grid-container {
  padding: 0 70px 0 140px;
}
</style>
