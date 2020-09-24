import { LocalStorage } from 'quasar'

const user = LocalStorage.getItem('user')

export default function () {
  return {
    user
  }
}
