<template>
  <div class="stats-container" v-if="Object.keys(details).length>0">
    <StatsDetail
      :name="happiness"
      :data="mapRange(details.base_happiness)"
      :value="details.base_happiness"
    />
    <StatsDetail
      :name="captureRate"
      :data="mapRange(details.capture_rate)"
      :value="details.capture_rate"
    />
  </div>
  <div v-else class="stats-container">
    <Loader />
  </div>
</template>
<script>
import StatsDetail from "@/components/statsDetail.vue";
import Loader from "@/components/loader.vue";
import CONSTANTS from "@/constants";
export default {
  name: "PokeStats",
  props: ["details"],
  data: function() {
    return {
      happiness: "Happiness",
      captureRate: "Capture Rate",
      descriptionCount: 2,
      boxProperties: {
        bottom: "15px",
        width: "100%",
        height: "15px"
      }
    };
  },
  methods: {
    mapRange: rate => Math.ceil((rate / CONSTANTS.maxVal) * 100)
  },
  components: {
    StatsDetail,
    Loader
  }
};
</script>
<style lang="scss" scoped>
.stats-container {
  display: inline-grid;
  width: 30%;
  text-align: left;
  margin: 0 0 0 10px;
}
</style>
