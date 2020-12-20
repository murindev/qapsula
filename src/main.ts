import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vue2TouchEvents from 'vue2-touch-events';

import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);

Vue.use(Vue2TouchEvents, {
  disableClick: false,
  touchClass: '',
  tapTolerance: 10,
  touchHoldTolerance: 400,
  swipeTolerance: 100,
  longTapTimeInterval: 400,
});
Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
