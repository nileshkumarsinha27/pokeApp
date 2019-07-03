import Vue from "vue";
import Vuex from "vuex";
import CONSTANTS from "@/constants";

Vue.use(Vuex);

const getUniqueValues = arr =>
  arr.filter((thing, index) => {
    return (
      index ===
      arr.findIndex(obj => {
        return (
          obj.flavor_text.replace(/(\r\n|\n|\r)/gm, " ").toLowerCase() ===
          thing.flavor_text.replace(/(\r\n|\n|\r)/gm, " ").toLowerCase()
        );
      })
    );
  });

export default new Vuex.Store({
  state: {
    data: [],
    pokeDetail: {},
    pokeUrl: "",
    pokeDetailData: {},
    regions: [],
    regionUrl: CONSTANTS.DEFAULT_API,
    regionSelected: CONSTANTS.DEFAULT_REGION,
    refData: []
  },
  getters: {
    data: state => state.data,
    pokeDetail: state => state.pokeDetail,
    pokeUrl: state => state.pokeUrl,
    pokeDetailDescription: state =>
      Object.keys(state.pokeDetailData).length > 0
        ? getUniqueValues(
            state.pokeDetailData.flavor_text_entries.filter(
              elem => elem.language.name === "en"
            )
          )
        : [],
    pokeName: state =>
      Object.keys(state.pokeDetailData).length > 0
        ? state.pokeDetailData.name
        : "",
    pokeDetailData: state => state.pokeDetailData,
    regions: state => state.regions,
    regionUrl: state => state.regionUrl,
    regionSelected: state => state.regionSelected
  },
  mutations: {
    setPokeData: function(state, payload) {
      state.data = payload;
      state.refData = payload;
    },
    setPokeDetails: function(state, payload) {
      state.pokeDetail = Object.assign({}, payload);
    },
    setPokeUrlMutation: function(state, payload) {
      state.pokeUrl = payload;
    },
    setPokeDetailData: function(state, payload) {
      state.pokeDetailData = Object.assign({}, payload);
    },
    setRegions: function(state, payload) {
      state.regions = [...payload];
    },
    setRegionUrl: function(state, payload) {
      state.regionUrl = payload.url;
      state.regionSelected = payload.name;
    },
    clearDetailsState: function(state) {
      state.pokeDetailData = Object.assign({});
    },
    searchMutation: function(state, payload) {
      state.data = state.refData;
      state.data = state.data.filter(elem =>
        elem.pokemon_species.name.includes(payload)
      );
    },
    resetSearchMutation: function(state) {
      state.data = state.refData;
    }
  },
  actions: {
    setData: function({ commit }, payload) {
      commit("setPokeData", payload);
    },
    setPokeDetail: function({ commit }, payload) {
      commit("setPokeDetails", payload);
    },
    setPokeUrl: function({ commit }, payload) {
      commit("setPokeUrlMutation", payload);
    },
    setPokeDetailsData: function({ commit }, payload) {
      commit("setPokeDetailData", payload);
    },
    listRegions: function({ commit }, payload) {
      commit("setRegions", payload);
    },
    setRegionUrl: function({ commit }, payload) {
      commit("setRegionUrl", payload);
    },
    clearDetails: function({ commit }) {
      commit("clearDetailsState");
    },
    search: function({ commit }, payload) {
      commit("searchMutation", payload);
    },
    resetSearch({ commit }) {
      commit("resetSearchMutation");
    }
  }
});
