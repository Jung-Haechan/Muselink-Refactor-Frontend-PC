<template>
  <div style="padding-left: 40px;">
    <div v-if="isLogin" class="text-center">
      <round-image :diameter="120" url="bgs/index.jpg" style="margin-top: 50px;"/>
      <div style="font-size: 20px;">Jooyong Kim
        <q-icon name="settings" style="opacity: 0.2"/>
      </div>
      <div class="row justify-center q-mt-sm" style="font-size: 10px;">
        <div class="text-primary">팔로워</div>
        <div>&emsp;17&emsp;</div>
        <div class="text-primary">팔로잉</div>
        <div>&emsp;42&emsp;</div>
        <div class="text-primary">프로젝트</div>
        <div>&emsp;3</div>
      </div>
      <q-btn unelevated rounded color="black" label="Go to my channel" text-color="ml-yellow" class="q-mt-md"
             style="font-size: 10px;"/>
      <div class="q-pt-lg">
        <small-list
          label="나의 프로젝트"
        />
        <small-list
          label="참여한 프로젝트"
        />
        <small-list
          label="나의 재생목록"
        />
      </div>
    </div>
    <div v-else class="text-center q-gutter-sm" style="margin-top: 200px">
      <div style="font-size: 20px;">Sign In</div>
      <ml-input v-model="loginForm.email" label="EMAIL" dense/>
      <ml-input v-model="loginForm.password" label="PASSWORD" dense/>
      <div>
        <q-btn color="primary" class="full-width" rounded>
          Sign In
        </q-btn>
      </div>
      <div class="q-py-sm">
        <q-separator dark inset />
      </div>
      <div>
        <q-btn color="white" text-color="black" class="full-width" rounded>
          <q-icon name="img:icons/google-icon.svg" class="q-mr-md"/>
          Sign In With Google
        </q-btn>
      </div>
      <div class="q-gutter-x-md q-pt-sm">
        <q-checkbox v-model="loginForm.rememberMe" keep-color color="primary" label="Remember me"/>
      </div>
      <div class="q-gutter-x-md">
        <span>New to Muselink? </span><span class="text-primary"> Sign up</span>
      </div>
      <div class="q-gutter-x-md">
        <span>Can't Sign In? </span><span class="text-primary"> Find Id/Password</span>
      </div>
    </div>
  </div>
</template>

<script>
import RoundImage from 'components/RoundImage'
import SmallList from 'components/SmallList'
import MlInput from 'components/MlInput'

export default {
  name: 'Drawer',
  components: { RoundImage, SmallList, MlInput },
  data () {
    return {
      loginForm: {
        email: '',
        password: '',
        rememberMe: false
      },
      isLogin: false
    }
  }
}
</script>
