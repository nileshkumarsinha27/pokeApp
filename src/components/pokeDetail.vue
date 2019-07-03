<template>
  <div v-if="Object.keys(details).length > 0">
    <PokeDetails
      :details="details"
      :name="name"
      :description="pokeDescription"
    />
  </div>
  <div v-else>
    <Loader />
  </div>
</template>

<script>
import axios from "axios";
import Store from "@/store.js";
import { mapGetters } from "vuex";
import Loader from "@/components/loader";
import PokeDetails from "@/components/pokeDetails.vue";
export default {
  name: "pokeDetail",
  mounted: function() {
    this.getPokeDetail();
  },
  methods: {
    getPokeDetail: function() {
      let url;
      if (this.pokeUrl) {
        url = this.pokeUrl;
      } else if (localStorage.getItem("pokeUrl")) {
        url = localStorage.getItem("pokeUrl");
      }
      if (url) {
        axios
          .get(url)
          .then(resp => {
            Store.dispatch("setPokeDetailsData", resp.data);
          })
          .catch(e => {
            console.log("error", e);
          });
      }
    }
  },
  computed: mapGetters({
    pokeUrl: "pokeUrl",
    pokeDescription: "pokeDetailDescription",
    name: "pokeName",
    details: "pokeDetailData"
  }),
  destroyed: function() {
    Store.dispatch("clearDetails");
  },
  components: {
    PokeDetails,
    Loader
  }
};
</script>
