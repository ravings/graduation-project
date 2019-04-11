import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: ''
  },
  getters: {
    user: state => {
      state.users
    }
  },
  mutations: {
    add(state, user) {
      state.users = user;
    }
  },
  actions: {
    setUser: ({commit}, user) => {
      commit('add', user)
    }
  }
});
