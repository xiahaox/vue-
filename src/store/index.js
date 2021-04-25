import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    a: 2,

  },
  getters: {
    doneTodos: (state) => {
      console.log(state.b);
    }
  },
  mutations: {
    dd(store) {
      console.log(store);
    }
  },
  actions: {
    increment(store) {
      console.log(store);
      store.commit('dd')
    }
  },
  modules: {
  }
})


