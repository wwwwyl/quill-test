import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    saveFunction: function(){console.log("Error: empty save function")},
  },
  getters: {
  },
  mutations: {
    login (state) {
      state.isLogin = true
    },
    logout (state) {
      state.isLogin = false
    },
    setSaveFunction(state, payload) {
      console.log("setSaveFunction");
      state.saveFunction = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
