import Vue from 'vue'
import Vuex from 'vuex'
// import VueRouter from 'vue-router';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resolutions: [],
    reports: [],
    users: [],
    accessToken: null,
    user_id: null,
  },

  mutations: {
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },

    setUser: (state, user_id) => {
      state.user_id = user_id
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
      });router.push("/resolutions")
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
        localStorage.setItem("setUser", response.user_id)
        commit("updateAccessToken", response.token);
        commit("setUser", response.user_id)
      });router.push("/resolutions")
    },

    fetchAccessToken({commit}) {
      commit("updateAccessToken", localStorage.getItem("accessToken"));
    },

    logout({commit}){
      localStorage.removeItem("accessToken");
      commit("logout");router.push("/Home")
    },

    fetchReports({ commit }){
      fetch("http://localhost:3000/reports/")
        .then(response => response.json())
        .then(response => {
        commit("setReports", response)
    })
   },

    //  fetchResolutions({ commit }){
    //   const user = localStorage.getItem("setUser")
    //    fetch("http://localhost:3000/resolutions/")
    //     //  .then(response => response.json())
    //      .then(response.filter(response => response.user_id == user))
    //      .then(response => {
    //       commit("setResolutions", response)
    //      )}
    // },

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
