<template>
  <div class="description-container">
    <Description :title="nameTag" :data="name" />
    <Description :title="hatchTag" :data="getHatchCount()" :isSteps="isSteps" />
    <Description
      :title="shapeTag"
      :data="details.shape"
      :keyRender="nameKey"
      :isObject="isObject"
    />
    <Description
      :title="habitatTag"
      :data="details.habitat"
      :keyRender="nameKey"
      :isObject="isObject"
    />
    <Description
      :title="colorTag"
      :data="details.color"
      :keyRender="nameKey"
      :isObject="isObject"
    />
    <Description
      :title="descriptionTag"
      :data="description"
      :keyRender="flavourKey"
    />
    <Description
      :title="generaTag"
      :data="details.genera"
      :keyRender="generaKey"
    />
  </div>
</template>

<script>
import Description from "@/components/description";
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
    isSteps: true
  }),
  methods: {
    getHatchCount: function() {
      return 255 * (this.details.hatch_counter + 1);
    }
  }
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
