import axios from 'axios'
import { LocalStorage } from 'quasar'

function handleLoginResponse (context, response) {
  const token = response.data.token
  const user = response.data.user

  LocalStorage.set('token', token)
  LocalStorage.set('user', user)

  context.commit('login', user)
  return Promise.resolve(user)
}

function handleLoginError (err) {
  console.log(err)
  const result = {
    handled: true,
    message: 'Login failed'
  }
  return Promise.reject(result)
}

export function socialLogin (context, payload) {
  return axios.post(`/api/login/${payload.provider}`, payload.res).then(res => handleLoginResponse(context, res)).catch(handleLoginError)
}

export function login (context, form) {
  return axios.post('/api/login', form).then(res => handleLoginResponse(context, res)).catch(handleLoginError)
}

export function register (context, form) {
  return axios.post('/api/register', form).then(res => handleLoginResponse(context, res)).catch(handleLoginError)
}

export function logout (context) {
  return axios.post('/api/logout')
    .then(() => {
      LocalStorage.remove('user')
      LocalStorage.remove('token')
      context.commit('logout')
      return Promise.resolve()
    })
    .catch(() => Promise.reject({
      handled: true,
      message: 'Logout failed'
    }))
}
