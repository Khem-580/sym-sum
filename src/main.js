import Vue from 'vue';

import router from './router/router.js';
import Main from './Main.vue';
import store from './store';

new Vue({
  store,
  router,
  render: h => h(Main),
}).$mount('#main')
