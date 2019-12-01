import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resolutions: [],
    reports: [],
  },
  mutations: {
    setResolutions(state, resolutions){
      state.resolutions = resolutions
    },
    addResolution(state, resolution){
      state.resolutions = [resolution, ...state.resolutions]
    },
    deleteResolution(state, id){
      state.resolutions = state.resolutions.splice(id)
    },
  },
  actions: {
    fetchReports({ commit }){
      fetch("http://localhost:3000/resports/")
        .then(response => response.json())
        .then(response => {
        commit("setReports", response)
    })
   },
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
    },
    deleteResolution({ commit }, id){
      fetch("http://localhost:3000/resolutions/" + id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id),
      }).then(commit("deleteResolution", id)
      )},

      editResolution({ commit }, resolution, id){
        fetch("http://localhost:3000/resolutions/" + id, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(resolution),
      }).then(response => response.json())
        .then(resolution => {
          commit("addResolution", resolution)
        })
      },
  },
  modules: {
  }
})
