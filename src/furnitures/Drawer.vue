<template>
  <div style="padding-left: 40px;">
    <div v-if="user" class="text-center">
      <round-image :diameter="120" :url="user.profile_image_file ? user.profile_image_file.path : 'defaults/avatar.png'" style="margin-top: 50px;"/>
      <div style="font-size: 20px;">{{ user.name }}
        <q-icon name="settings" style="opacity: 0.2"/>
      </div>
      <div class="row justify-center q-mt-sm" style="font-size: 10px;">
        <div class="text-primary">팔로워</div>
        <div>&emsp;{{ user.followers.length }}&emsp;</div>
        <div class="text-primary">팔로잉</div>
        <div>&emsp;{{ user.followings.length }}&emsp;</div>
        <div class="text-primary">프로젝트</div>
        <div>&emsp;{{ user.contributing_projects.length }}</div>
      </div>
      <div class="q-gutter-x-sm">
        <q-btn unelevated rounded color="black" label="Go to my channel" text-color="ml-yellow" class="q-mt-md"
               style="font-size: 10px;"/>
        <q-btn unelevated rounded color="primary" label="Log Out" text-color="ml-yellow" class="q-mt-md"
               style="font-size: 10px;" @click="logout" :loading="loading" />
      </div>
      <div class="q-pt-lg">
        <small-list
          label="나의 프로젝트" list-class="my-project"
        />
        <small-list
          label="참여한 프로젝트" list-class="participated-project"
        />
        <small-list
          label="나의 재생목록" list-class="my-playlist"
        />
      </div>
    </div>
    <div v-else class="text-center q-gutter-sm" style="margin-top: 200px">
      <div style="font-size: 20px;">Sign In</div>
      <ml-input v-model="loginForm.email" label="EMAIL" dense/>
      <ml-input v-model="loginForm.password" label="PASSWORD" dense type="password"/>
      <div>
        <q-btn color="primary" class="full-width" rounded @click="authenticate('login', loginForm)" :loading="loading">
          Sign In
        </q-btn>
      </div>
      <div class="q-py-sm">
        <q-separator dark inset />
      </div>
      <div>
        <q-btn color="white" text-color="black" class="full-width" rounded :loading="loading">
          <q-icon name="img:icons/google-icon.svg" class="q-mr-md"/>
          Sign In With Google
        </q-btn>
      </div>
      <div class="q-gutter-x-md q-pt-sm">
        <q-checkbox v-model="loginForm.rememberMe" keep-color color="primary" label="Remember me"/>
      </div>
      <div class="q-gutter-x-md">
        <span>New to Muselink? </span><span class="text-primary" style="cursor: pointer" @click="signUpDialog = true"> Sign up</span>
      </div>
      <div class="q-gutter-x-md">
        <span>Can't Sign In? </span><span class="text-primary"> Find Id/Password</span>
      </div>

      <q-dialog v-model="signUpDialog" persistent>
        <q-card style="background-color: #000000; color: white; width: 500px; max-width: 80vw;">
          <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <div class="text-center" style="font-size: 40px">Sign Up</div>
          <q-card-section class="text-center q-pa-xl">
            <q-form @submit="authenticate('register', registerForm)" class="q-gutter-y-lg">
              <ml-input v-model="registerForm.name" label="USER NAME" lazy-rules
                        :rules="[ val => val && val.length > 0 || 'This feild is required' ]" />
              <ml-input v-model="registerForm.email" label="EMAIL" lazy-rules
                        :rules="[ val => val.includes('@') || 'This is not email format' ]" />
              <ml-input v-model="registerForm.password" label="PASSWORD" type="password" lazy-rules
                        :rules="[ val => val && val.length > 8 || 'Password should be longer than 8 characters' ]" />
              <div>
                <q-btn color="primary" type="submit" class="full-width" rounded size="lg" :loading="loading">
                  Sign Up
                </q-btn>
              </div>
              <div class="q-py-sm">
                <q-separator dark inset />
              </div>
              <div>
                <q-btn color="white" text-color="black" class="full-width" rounded size="lg" @click="initSocialLogin('google')" :loading="loading">
                  <q-icon name="img:icons/google-icon.svg" class="q-mr-md"/>
                  Sign Up With Google
                </q-btn>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import RoundImage from 'components/RoundImage'
import SmallList from 'components/SmallList'
import MlInput from 'components/MlInput'
import resourceMixins from '../mixins/resource'
import responseHandler from '../utilities/responseHandler'

export default {
  name: 'Drawer',
  mixins: [resourceMixins],
  components: { RoundImage, SmallList, MlInput },
  data () {
    return {
      loginForm: {
        email: '',
        password: '',
        rememberMe: false
      },
      registerForm: {
        name: '',
        email: '',
        password: '',
        resource_server: 'muselink'
      },
      signUpDialog: false,

      noneUser: {
        profile_image_file: {},
        followers: [],
        followings: [],
        contributing_projects: []
      },

      loading: false,

      user: this.noneUser
    }
  },
  mounted () {
    this.user = this.$store.state.auth.user
  },
  methods: {
    initSocialLogin (provider) {
      this.loading = true
      this.$auth.authenticate(provider).then(res => {
        this.authenticate('socialLogin', { provider, res })
      })
    },
    logout () {
      this.loading = true
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.$router.go()
          this.user = this.noneUser
        })
        .catch(responseHandler.notifyError)
        .finally(() => {
          this.loading = false
        })
    },
    authenticate (type, form) {
      this.loading = true
      this.$store.dispatch(`auth/${type}`, form)
        .then(() => {
          this.signUpDialog = false
          this.user = this.$store.state.auth.user
        }).catch(responseHandler.notifyError)
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style>
  .q-dialog__backdrop {
    backdrop-filter: blur(10px);
  }
</style>
