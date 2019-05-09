import axios from 'axios';
import { Loading } from 'element-ui';
// import elementUi from 'element-ui';

let instance = axios.create()

let loading;
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
}

function endLoading() {
  loading.close();
}


// 请求拦截器
instance.interceptors.request.use(config => {

  // 加载动画
  startLoading();
  // loading;
  // 重设请求头
  if (sessionStorage.token) {
    // config.headers.Authorization = sessionStorage.token;
    config.headers.common['Authorization'] = sessionStorage.token;
  }
  return config;
}, error => {
  return Promise.reject(error);
})

// 响应拦截器
instance.interceptors.response.use(response => {

  // 结束动画
  endLoading();
  // loading.close();
  // console.log(response);
  return response;
}, error => {
  // 结束动画
  endLoading();
  // loading.close();
  const status = error.response;
  if (status == 401) {
    sessionStorage.removeItem('token');
    this.$router.push({path: '/Management/home'});
  }
  return Promise.reject(error);
})

export default instance;
