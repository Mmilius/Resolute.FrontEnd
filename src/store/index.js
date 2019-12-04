import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resolutions: [],
    reports: [],
    users: [],
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
    addUser(state, user){
      state.user = [user, ...state.users]
    },
  },
  actions: {

    addUser({ commit }, user){
      fetch("http://localhost:3000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then(response => response.json())
      .then(user => {
        commit("addUser", user)
      })
    },

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

      editResolution({ commit }, resolution){
        fetch("http://localhost:3000/resolutions/" + resolution.id, {
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
