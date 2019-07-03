<template>
  <div class="status-detail">
    <p>
      <strong>Stat:</strong>
      {{ name }}
    </p>
    <p>
      <strong>Value:</strong>
      {{ value }}/{{ maxVal }}
    </p>
    <div class="stats-div">
      <p
        class="stats-span"
        :style="{
          width: data + '%',
          borderRadius: getBorderRaduis(data),
          transition: 'width 2s ease-out'
        }"
      />
    </div>
  </div>
</template>
<script>
import CONSTANTS from "@/constants";
export default {
  name: "StatsDetail",
  props: ["name", "data", "value"],
  data: function() {
    return {
      border: "0 10px 10px 0",
      maxVal: CONSTANTS.maxVal
    };
  },
  methods: {
    getBorderRaduis: function(val) {
      return val == 100 ? this.border : 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.status-detail {
  margin: 10px 0;
  box-sizing: border-box;
  padding: 0 24px;
  p {
    display: inline-block;
    width: 50%;
  }
}
.stats-div {
  width: 380px;
  height: 10px;
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0 10px 10px 0;
  margin: 10px 0;
  .stats-span {
    background: #42b983;
    height: inherit;
  }
  p {
    display: block;
    color: #2c3e50;
  }
}
@media (max-width: 1366px) {
  .status-detail {
    p {
      width: 50%;
    }
  }
  .stats-div {
    width: 295px;
  }
}
</style>
