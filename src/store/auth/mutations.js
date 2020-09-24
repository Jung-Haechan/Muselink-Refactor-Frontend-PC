export function login (state, user) {
  state.user = user
}

export function logout (state) {
  state.user = null
}
