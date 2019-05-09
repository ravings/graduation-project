import Vue from "vue";
// import axios from "axios";
import axios from './https/axios.js'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$ajax = axios;

// 路由守卫，防止未登录直接通过输入url进入管理页面
router.beforeEach((to, from, next) => {
  const nextRouterPath = ['/Management', '/Management/home', '/Management/administrator', '/Management/tinymce',
  '/Management/news_company', '/Management/Personal_information', '/Management/AU_about','/Management/product',
   '/Management/job_1', '/Management/job_2', '/Management/AU_history', '/Management/AU_activity'];
  let isLogin = sessionStorage.getItem('token');
  if (nextRouterPath.indexOf(to.path) >= 0 && !isLogin) {
    next({
      path: '/Login',
      // 将跳转的路由path作为参数，登录成功后跳转到该路由
      query: {redirect: to.fullPath}
    })
  }else{
    next();
  }
  if (to.path == '/Login') {
    if (isLogin) {
      // this.$router.push({path: '/Management/home'});
      next({
        path: '/Management/home'
      })
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
