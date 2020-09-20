import Vue from 'vue'
import axios from 'axios'
import { LocalStorage } from 'quasar'

axios.interceptors.request.use(
  function (config) {
    const token = LocalStorage.getItem('token')
    config.headers.Authorization = token ? `${token.token_type} ${token.access_token}` : null
    return config
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error)
  })

Vue.prototype.$axios = axios
