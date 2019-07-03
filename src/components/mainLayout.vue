<template>
  <main>
    <article class="main-container">
      <aside id="nav">
        <ul>
          <li
            v-for="(item, index) in regions"
            v-bind:key="index"
            v-on:click="clickHandle(item)"
            v-bind:class="classDisplay(item.name)"
          >{{ item.name }}</li>
        </ul>
      </aside>
      <section class="container">
        <SearchComponent />
        <DataGrid />
      </section>
    </article>
  </main>
</template>
<style lang="scss" scoped>
#nav {
  height: 100%;
  min-height: 100vh;
  width: 20%;
  display: inline-grid;
  background: #2c3e50;
  position: fixed;
  text-align: center;
  left: 0;
  li {
    font-weight: bold;
    color: #2c3e50;
    width: 100%;
    display: block;
    padding: 14px 0 12px;
    height: 20px;
    color: #fff;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      background: #42b983;
    }
    &.active {
      background: #42b983;
    }
  }
}
.container {
  display: inline-grid;
  width: 80%;
  position: absolute;
  left: 20%;
  background: #f1f4f8;
}
header {
  width: 100%;
  background: #3a4b5d;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  color: #fff;
  padding: 9px 0;
  text-align: center;
  font-size: 24px;
}
</style>
<script>
import axios from "axios";
import DataGrid from "@/components/dataGrid.vue";
import SearchComponent from "@/components/searchComponent.vue";
import API from "@/api-config/api";
import Store from "@/store.js";
import CONSTANTS from "@/constants.js";
import { mapGetters } from "vuex";
export default {
  name: "mainLayout",
  components: {
    DataGrid,
    SearchComponent
  },
  mounted: function() {
    axios
      .get(API.pokeDex)
      .then(response => {
        Store.dispatch("listRegions", response.data.results);
      })
      .catch(e => {
        console.log(e);
      });
    if (this.regionUrl) {
      this.getData(this.regionUrl);
    }
  },
  methods: {
    clickHandle: function(item) {
      Store.dispatch("setRegionUrl", item);
      this.getData(item.url);
    },
    classDisplay: function(name) {
      if (name === this.regionSelected) {
        return "active";
      }
    },
    getData: function(regionUrl) {
      const headers = {
        "Access-Control-Allow-Origin": "*"
      };
      axios.get(regionUrl, headers).then(resp => {
        Store.dispatch("setData", resp.data.pokemon_entries);
      });
    }
  },
  computed: mapGetters({
    regions: "regions",
    regionSelected: "regionSelected",
    regionUrl: "regionUrl"
  }),
  data: function() {
    return {
      headingText: CONSTANTS.HEADING
    };
  }
};
</script>
