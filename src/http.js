import axios from 'axios'
import store from './store'
import router from './router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://backstage.aki.17zuonie.org:2020/'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `Bearer ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息
          store.commit('logout')

          if (router.currentRoute.path !== '/auth/expired')
            router.replace('/auth/expired')
      }
    }
    return Promise.reject(error)
  },
)

export default axios