<template>
  <div class="description-container" v-if="Object.keys(details).length>0">
    <Description :title="nameTag" :data="name" />
    <Description :title="hatchTag" :data="getHatchCount()" :isSteps="isSteps" />
    <Description :title="shapeTag" :data="details.shape" :keyRender="nameKey" :isObject="isObject" />
    <Description
      :title="habitatTag"
      :data="details.habitat"
      :keyRender="nameKey"
      :isObject="isObject"
    />
    <Description :title="colorTag" :data="details.color" :keyRender="nameKey" :isObject="isObject" />
    <Description
      :title="EvolutionTag"
      :data="item.species"
      :keyRender="nameKey"
      v-for="(item, index) in evolutionData"
      :key="index"
      :isObject="isObject"
    />
    <Description :title="descriptionTag" :data="description" :keyRender="flavourKey" />
    <Description :title="generaTag" :data="details.genera" :keyRender="generaKey" />
    <Description :title="eggGroupTag" :data="details.egg_groups" :keyRender="nameKey" />
  </div>
  <div v-else class="description-container">
    <skeleton-loading>
      <row :gutter="{top: '10px', bottom: '10px'}" v-for="i in descriptionCount" :key="i">
        <square-skeleton :boxProperties="boxProperties"></square-skeleton>
      </row>
    </skeleton-loading>
  </div>
</template>

<script>
import Description from "@/components/description";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "PokeDescription",
  props: ["details", "description", "name"],
  components: {
    Description
  },
  data: () => ({
    nameTag: "Name:",
    descriptionTag: "Description:",
    flavourKey: "flavor_text",
    nameKey: "name",
    habitatTag: "Habitat:",
    isObject: true,
    colorTag: "Color:",
    generaTag: "Genera:",
    generaKey: "genus",
    hatchTag: "Steps taken for hatching:",
    shapeTag: "Shape:",
    isSteps: true,
    eggGroupTag: "Egg Group:",
    EvolutionTag: "Evolution Chain:",
    descriptionCount: 9,
    boxProperties: {
      bottom: "15px",
      width: "100%",
      height: "15px",
      borderRadius: "5px"
    }
  }),
  methods: {
    getHatchCount: function() {
      return 255 * (this.details.hatch_counter + 1);
    },
    getEvolutionChain: function() {
      axios
        .get(this.details.evolution_chain.url)
        .then(resp => {
          this.$store.dispatch("setEvolutionData", resp.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created: function() {
    this.getEvolutionChain();
  },
  computed: mapGetters({
    evolutionData: "evolutionData"
  })
};
</script>
<style lang="scss">
.description-container {
  display: inline-grid;
  width: 65%;
  padding: 0 0 0 24px;
  text-transform: capitalize;
  ul {
    list-style: square;
  }
  .description {
    text-align: justify;
    margin: 8px 0;
    line-height: 1.1;
  }
  .description-sub-container {
    margin: 0 0 2%;
  }
}
</style>
