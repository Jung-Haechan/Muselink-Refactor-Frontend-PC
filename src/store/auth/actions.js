import axios from 'axios'
import { LocalStorage } from 'quasar'

export function socialLogin (context, payload) {
  axios.post(`/api/login/${payload.provider}`, payload.response).then(response => {
    const token = response.data.token
    const user = response.data.user

    LocalStorage.set('token', token)
    LocalStorage.set('user', user)

    context.commit('login', { token, user })
    return Promise.resolve({ token, user })
  }).catch(err => {
    console.log(err)
    const result = {
      handled: true,
      message: 'Login failed: '
    }
    // switch (err.response.status) {
    //   case 422:
    //     result.message += err.response.data.message
    //     result.errors = err.response.data.errors
    //     break
    //   case 500:
    //   default:
    //     result.message += 'Server error'
    //     break
    // }
    return Promise.reject(result)
  })
}
