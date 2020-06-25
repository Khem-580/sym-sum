import { RANDOM_COLOR, RESET_COLOR, SPLICE_COLOR } from '../mutations';

const initState = {
  storeColor: [
    'rgba(111, 191, 76, 1)',
    'rgba(255, 165, 0, 1)',
    'rgba(62, 158, 230, 1)',
  ],
};

export default {
  namespaced: true,
  state: {...initState},
  mutations: {
    [RANDOM_COLOR](state) {
      state.storeColor.sort(() => Math.random() - 0.5);
    },
    [SPLICE_COLOR](state, color) {
      const indexColor = state.storeColor.indexOf(color);
      state.storeColor.splice(indexColor, 1);
    },
    [RESET_COLOR](state) {
      state.storeColor = [...initState.storeColor];
    }
  },
  // actions
  // getters,
}