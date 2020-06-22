export default {
  namespaced: true,
  state: {
    storeColor: [
      'rgba(0, 105, 217, 1)',
      'rgba(111, 191, 76, 1)',
      'rgba(255, 165, 0, 1)',
      'rgba(237, 95, 213, 1)',
      'rgba(62, 158, 230, 1)',
    ],
  },
  getters: {
    randomColor: state => {
      return state.storeColor;
    },
  }
  // action,
  // mutation,
}