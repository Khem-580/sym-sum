import { RANDOM_COLOR, EQUATION_CALLED, RESET_EQUATION_CALLED } from '../mutations';
import { RESET_COLOR } from '../actions';

const initState = {
  storeColor: [
    'rgba(0, 105, 217, 1)',
    'rgba(111, 191, 76, 1)',
    'rgba(255, 165, 0, 1)',
    'rgba(237, 95, 213, 1)',
    'rgba(62, 158, 230, 1)',
  ],
  equationCalled: 0,
};

export default {
  namespaced: true,
  state: {...initState},
  mutations: {
    [RANDOM_COLOR](state) {
      state.storeColor.sort(() => Math.random() - 0.5);
    },
    [EQUATION_CALLED](state) {
      state.equationCalled++;
    },
    [RESET_EQUATION_CALLED](state) {
      state.equationCalled = 0;
    },
  },
  actions: {
    [RESET_COLOR]({ commit }) {
      commit(RESET_EQUATION_CALLED);
      commit(RANDOM_COLOR);
    } 
  }
  // getters,
}