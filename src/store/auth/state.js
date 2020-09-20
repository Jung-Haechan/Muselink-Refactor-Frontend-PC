import { LocalStorage } from 'quasar'

const user = LocalStorage.getItem('user')
const token = LocalStorage.getItem('token')
const initialUserState = user ? {
  loggedIn: true,
  user
} : {
  loggedIn: false,
  user: null
}

const initialTokenState = token ? {
  token
} : {
  token: {
    access_token: null,
    expires_in: null,
    token_type: null
  }
}

export default function () {
  return {
    user: initialUserState,
    token: initialTokenState
  }
}
