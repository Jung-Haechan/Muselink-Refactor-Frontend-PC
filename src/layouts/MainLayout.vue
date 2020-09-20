<template>
  <q-layout view="lHh lpr lff">
    <q-header style="background-color: rgba(255, 255, 255, 0);">
      <div class="left-drawer-button" @click="leftDrawerOpen = !leftDrawerOpen"></div>
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/">
            <img src="logos/main.png" width="200px" class="q-pa-md" style="margin-left: 40px;">
          </router-link>
        </q-toolbar-title>
        <q-btn-dropdown flat label="Get Started">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Introduction</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Tutorials</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn flat label="Feed"/>
        <q-btn-dropdown flat label="Board">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Collaborating</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Release</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Forum</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn flat label="Chart"/>
        <q-btn-dropdown flat label="Other Services">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Lecture</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown flat label="CS">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Notice</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>FAQ</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Support Us</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered class="overflow-hidden"
    >
      <drawer />
    </q-drawer>
    <q-page-container>
      <q-page class="flex flex-center q-mr-md" style="margin-left: 70px; color: #dfdfdf">
        <transition appear name="fade-right">
          <router-view/>
        </transition>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Drawer from 'src/furnitures/Drawer'

export default {
  name: 'MainLayout',
  components: { Drawer },
  mounted () {
    if (this.$route.query.token) {
      this.$axios.get('/api/login/check', {
        params: {
          token: this.$route.query.token
        }
      })
        .then((res) => {
          console.log(res)
        })
    }
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
  .q-menu {
    background-color: rgba(255, 255, 255, 0);
    color: white;
  }

  .left-drawer-button {
    height: 200vh;
    float: left;
    width: 50px;
    background-color: #000000aa;
    backdrop-filter: blur(10px);
    cursor: pointer;
    position: fixed;
  }

  .q-drawer {
    background-color: #000000aa !important;
    backdrop-filter: blur(10px);
    color: #dfdfdf;
    overflow: hidden;
  }

  .fade-right-enter-active, .fade-right-leave-active {
    transition: all 2.0s ease;
  }

  .fade-right-enter, .fade-right-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }
</style>
