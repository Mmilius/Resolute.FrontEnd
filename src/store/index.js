import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resolutions: [],
    reports: [],
    users: [],
    accessToken: null,
  },

  mutations: {
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },

    logout: (state) => {
      state.accessToken = null;
    },

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

    doLogin({ commit }, loginData){
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }).then(response => response.json())
      .then(response => {
        localStorage.setItem("accessToken", response.token);
        commit("updateAccessToken", response.token);
      })
    },

    fetchAccessToken({commit}) {
      commit("updateAccessToken", localStorage.getItem("accessToken"));
    },

    logout({commit}){
      localStorage.removeItem("accessToken");
      commit("logout");
      VueRouter.push("/Home")
    },

    fetchReports({ commit }){
      fetch("http://localhost:3000/reports/")
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
