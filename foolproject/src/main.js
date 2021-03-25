import Vue from 'vue';
import App from './App.vue';
import './assets/styles/index.css';
import axios from 'axios';
import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

Vue.use(axios);
