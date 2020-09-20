export function login (state, user, token) {
  state.loggedIn = true
  state.user = user
  state.token = token
}

export function logout (state) {
  state.loggedIn = false
  state.user = null
  state.token = null
}
