import Vue from 'vue';
import Vuex from 'vuex';
import symApp from './modules/symApp';

Vue.use(Vuex);

export default new Vuex.Store ({
  modules: {
    symApp: symApp,
  }
});