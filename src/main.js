import "./assets/github-markdown.css";
import "./assets/atom-one-light.css";
import './assets/common.scss';
import './assets/icon/iconfont.css';

import Vue from 'vue';
import Router from 'vue-router';

import viewUi from 'view-ui';
import 'view-template/appbar/style.scss';
import 'view-template/list/style.scss';

import axios from 'axios';

import App from './App';
import themes from './themes';
import routes from './views/routes';
import demoCode from './components/demo-code';

const upload = {
  "filePath": 'http://file.dev.me/',
  /**
   * upload组件的数据提交函数
   * @param {String} url 图片上传地址
   * @param {Object} formData 要上传的图片FormData
   * @returns {Array} 上传成功后的rul数组
   */
  async post(url, formData) {
    const { data } = await axios.post(url, formData)
    return data.files
  },
}

Vue.use(viewUi, {
  "theme": {
    "default": "black",
    "customize": themes
  },
  "components": {
    "upload": upload,
    "uploadDrag": upload
  }
})

Vue.use(Router)

Vue.component('demo-code', demoCode)

const router = new Router({ routes })

Vue.config.productionTip = false

Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://localhost:8600/';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')