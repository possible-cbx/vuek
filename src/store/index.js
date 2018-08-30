import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
  state: {
    count: 0
  },
  getters: {
    squareCount: (state) => {
      return Math.pow(state.count, 2);
    }
  },
  mutations: {
    addCount (state, payload) {
      state.count += payload.count;
    }
  },
  actions: {
    addCount ({commit}, payload) {
      commit('addCount', payload);
    }
  }
};

const moduleB = {
  state: {
    count: 6
  },
  getters: {
    doubleCount: state => {
      return state.count * 2;
    }
  },
  mutations: {
    doubleCount (state) {
      state.count *= 2;
    }
  },
  actions: {
    doubleCount ({commit}) {
      commit('doubleCount');
    }
  }
};

export default new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
});
