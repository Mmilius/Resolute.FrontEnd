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
  },
  actions: {
     fetchResolutions({ commit }){
       fetch("http://localhost:3000/resolutions")
         .then(response => response.json())
         .then(response => {
         commit("setResolutions", response)
     })
    }
  },
  modules: {
  }
})
