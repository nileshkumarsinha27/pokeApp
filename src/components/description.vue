<template>
  <div>
    <div
      class="description-sub-container"
      v-if="typeof data === 'string' || typeof data === 'number'"
    >
      <strong>{{ title }}</strong>
      {{ data||'-' }}
      <span v-if="isSteps">Steps</span>
    </div>
    <div class="description-sub-container" v-else-if="!isObject">
      <strong>{{ title }}</strong>
      <ul>
        <li
          class="description"
          v-for="(item, index) in data"
          :key="index"
        >{{ item[keyRender] || '-'}}</li>
      </ul>
    </div>
    <div class="description-sub-container" v-else>
      <strong>{{ title }}</strong>
      {{ data && data[keyRender] || '-'}}
    </div>
  </div>
</template>
<script>
export default {
  name: "Description",
  props: ["title", "data", "keyRender", "isObject", "isSteps"]
};
</script>
