import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    user: state => {
      state.users
    }
  },
  mutations: {
    add(state, user) {
      state.users.push(user);
    }
  },
  actions: {
    setUser: ({commit}) => {
      commit('add')
    }
  }
});
