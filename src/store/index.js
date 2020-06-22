import Vue from 'vue';
import Vuex, { mapState } from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store ({
  state: {
    count: 0,
  },
  mutations: {
    increment (state) {
      return state.count++;
    }
  }
});