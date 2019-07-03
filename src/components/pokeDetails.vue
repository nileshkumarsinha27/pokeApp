<template>
  <div>
    <header class="heading">
      <img :src="backArr" @click="goHome()" />
      <span>{{ name }}</span>
    </header>
    <div class="grid-class">
      <PokeStats :details="details" />
      <PokeDescription :name="name" :description="description" :details="details" />
    </div>
  </div>
</template>
<script>
import PokeStats from "@/components/pokeStats";
import backArr from "@/assets/prev_arrow.svg";
import PokeDescription from "@/components/pokeDescription";
import Router from "@/router.js";
export default {
  name: "PokeDetails",
  props: ["details", "description", "name"],
  components: {
    PokeStats,
    PokeDescription
  },
  methods: {
    goHome: function() {
      Router.push("/");
    }
  },
  data: function() {
    return {
      backArr: backArr
    };
  }
};
</script>
<style lang="scss" scoped>
.heading {
  box-sizing: border-box;
  padding: 25px 24px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  background: #2c3e50;
  color: #fff;
  vertical-align: middle;
  margin: 0 0 20px;
  font-size: 24px;
  text-transform: capitalize;
  position: fixed;
  width: 100%;
  span {
    padding: 0 0 0 10px;
  }
  img {
    cursor: pointer;
  }
}
.grid-class {
  padding: 100px 0 0;
}
</style>
