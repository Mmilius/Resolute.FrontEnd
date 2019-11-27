import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resolutions: [],
  },
  mutations: {
    setResolutions(state, resolutions){
      state.resolutions = resolutions
    },
    addResolution(state, resolution){
      state.resolutions = [resolution, ...state.resolutions]
    }
  },
  actions: {
     fetchResolutions({ commit }){
       fetch("http://localhost:3000/resolutions/")
         .then(response => response.json())
         .then(response => {
         commit("setResolutions", response)
     })
    },
    addResolution({ commit }, resolution){
      fetch("http://localhost:3000/resolutions/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resolution),
      }).then(response => response.json())
      .then(resolution => {
        commit("addResolution", resolution)
      })
    }
  },
  modules: {
  }
})
