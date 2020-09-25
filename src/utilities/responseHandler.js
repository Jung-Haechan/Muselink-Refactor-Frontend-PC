import { Notify } from 'quasar'

export default {
  notifyResponse: (res) => {
    switch (res.status) {
      case 200:
        Notify.create({
          color: 'positive',
          message: '처리 완료되었습니다.',
          position: 'top'
        })
        break
      case 201:
        Notify.create({
          color: 'positive',
          message: '처리 완료되었습니다.',
          position: 'top'
        })
        break
      case 207:
        Notify.create({
          color: 'warning',
          message: res.data.message,
          position: 'top'
        })
        break
      default:
        break
    }
  },

  notifyError: (err) => {
    Notify.create({
      color: 'negative',
      message: err.message,
      position: 'top'
    })
  }
}
