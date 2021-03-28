import Vue from 'vue';
import App from './App.vue';
import './assets/styles/index.css';
import axios from 'axios';
import router from './router'
// importing my date filters for pretifying the publish dates
import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
Vue.use(axios);
// telling vue to use the date filters
Vue.use(VueFilterDateParse);
Vue.use(VueFilterDateFormat);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
