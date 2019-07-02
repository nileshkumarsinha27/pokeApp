<template>
  <div class="poke-details-container">
    <PokeDetail />
  </div>
</template>

<script>
import PokeDetail from "@/components/pokeDetail.vue";

export default {
  name: "pokemon_details",
  components: {
    PokeDetail
  },
  mounted: function() {
    window.scrollTo(0, 0);
  }
};
</script>
<style lang="scss" scoped>
.poke-details-container {
  min-height: 100vh;
}
</style>
