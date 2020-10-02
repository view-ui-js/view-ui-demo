import "./assets/github-markdown.css";
import "./assets/atom-one-light.css";
import '@/views/style/index.js';

import Vue from 'vue';
import Router from 'vue-router';

import App from './App';
import viewUi from './view-ui.js';
import routes from './views/routes.js';
import demoCode from './components/DemoCode.vue';
import themes from './themes.js';
import './components/index.js';

viewUi.add("lightGreen", themes.lightGreen);

const { theme } = localStorage;

viewUi.use(theme || 'black');

Vue.use(Router);

Vue.component('DemoCode', demoCode);

const router = new Router({ routes });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')