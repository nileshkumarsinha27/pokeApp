<template>
  <div class="stats-container">
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
</template>
<script>
import StatsDetail from "@/components/statsDetail.vue";
import CONSTANTS from "@/constants";
export default {
  name: "PokeStats",
  props: ["details"],
  data: function() {
    return {
      happiness: "Happiness",
      captureRate: "Capture Rate"
    };
  },
  methods: {
    mapRange: rate => Math.ceil((rate / CONSTANTS.maxVal) * 100)
  },
  components: {
    StatsDetail
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
