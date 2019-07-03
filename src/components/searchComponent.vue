<template>
  <label for="search">
    <img :src="serachIcn" />
    <input type="text" :placeholder="placeHolder" v-on:keyup="changeHandle" />
  </label>
</template>

<script>
import CONSTANTS from "@/constants.js";
import icnSearch from "@/assets/icn_search_grey.svg";
import Store from "@/store.js";
export default {
  name: "SearchComponent",
  data: function() {
    return {
      placeHolder: CONSTANTS.SEARCH_PLACE_HOLDER,
      serachIcn: icnSearch,
      inputVal: ""
    };
  },
  methods: {
    changeHandle: function(e) {
      const val = e.target.value;
      if (val && val.length > 0) {
        Store.dispatch("search", val);
      } else {
        Store.dispatch("resetSearch");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 300px;
  padding: 10px 0 5px 20px;
  background: inherit;
  border: none;
  border-bottom: 1px solid #d9dde1;
  margin: 0 0 0 25px;
}
img {
  position: relative;
  left: 40px;
  top: 2px;
}
</style>

