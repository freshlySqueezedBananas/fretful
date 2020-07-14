import Vue from 'vue';
import App from './App.vue';

/* ============
 * Styling
 * ============
 */

import './assets/sass/main.scss';

Vue.config.productionTip = false;

export const $bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app');
