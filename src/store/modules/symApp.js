import { RANDOM_COLOR, RESET_COLOR } from '../mutations';

const initState = {
  storeColor: [
    'rgba(0, 105, 217, 1)',
    'rgba(111, 191, 76, 1)',
    'rgba(255, 165, 0, 1)',
    'rgba(237, 95, 213, 1)',
    'rgba(62, 158, 230, 1)',
    'rgba(95, 95, 95, 1)',
  ],
};

export default {
  namespaced: true,
  state: {...initState},
  mutations: {
    [RANDOM_COLOR](state) {
      state.storeColor.sort(() => Math.random() - 0.5);
    },
    [RESET_COLOR](state) {
      state.storeColor = [...initState.storeColor];
    }
  },
  // actions
  // getters,
}