import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueSocialauth from 'vue-social-auth'
import axios from 'axios'

Vue.use(VueAxios, axios)
Vue.use(VueSocialauth, {
  providers: {
    google: {
      clientId: '930186888821-upcdj1fs4b9au7ltnatg4l8kkfj11k96.apps.googleusercontent.com',
      redirectUri: 'http://muselink.com:8080/login/google/callback' // Your client app URL
    }
  }
})
