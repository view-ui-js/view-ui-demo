import "./assets/github-markdown.css";
import "./assets/atom-one-light.css";
import './assets/common.scss';
import './assets/icon/iconfont.css';

import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';

import App from './App';
import viewUi from './view-ui.js';
import routes from './views/routes.js';
import demoCode from './components/demo-code';
import themes from './themes.js';

viewUi.add("lightGreen", themes.lightGreen);

viewUi.use('black');

Vue.use(Router)

Vue.component('demo-code', demoCode)

const router = new Router({ routes })

Vue.config.productionTip = false

Vue.prototype.$http = axios;

Vue.prototype.config = {
  upload: {
    base: "http://www.static.com/"
  }
};

axios.defaults.baseURL = 'http://localhost:8600/';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')