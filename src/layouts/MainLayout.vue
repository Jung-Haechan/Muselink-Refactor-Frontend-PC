<template>
  <q-layout view="lHh Lpr lff">
    <q-header style="background-color: rgba(255, 255, 255, 0);">
      <div class="left-drawer-button" @click="leftDrawerOpen = !leftDrawerOpen"
           style="backdrop-filter: blur(10px);"></div>
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
      bordered>
      <q-list style="background-color: #000000aa;">
      </q-list>
    </q-drawer>
    <q-page-container>
      <q-page class="flex flex-center q-mr-md" style="margin-left: 70px;">
        <router-view/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
console.log()
</script>

<style>
  .q-menu {
    background-color: rgba(255, 255, 255, 0);
    color: white;
  }

  .left-drawer-button {
    height: 100vh;
    float: left;
    width: 50px;
    background-color: #000000aa;
    cursor: pointer;
    position: fixed;
  }

  .q-drawer {
    background-color: #000000aa !important;
    backdrop-filter: blur(10px);
  }

  .bg-grey-1 {
    background-color: #00000000 !important;
  }
</style>
