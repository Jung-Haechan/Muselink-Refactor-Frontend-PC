<template>
  <q-layout view="lHh Lpr lff">
    <q-header style="background-color: rgba(255, 255, 255, 0);">
      <q-toolbar>
        <q-toolbar-title>
          <img src="logos/main.png" width="200px" class="q-pa-md">
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
        <q-btn flat label="Feed" />
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
        <q-btn flat label="Chart" />
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
      bordered
      content-class="bg-grey-1"
      style="background-color: #000000aa"
    >
      <q-list style="background-color: #000000aa">

      </q-list>
    </q-drawer>
    <q-page-container>
      <q-page>
        <div class="left-drawer-button" @click="leftDrawerOpen = !leftDrawerOpen"></div>
        <router-view />
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
  }
  .q-drawer {
    background-color: #000000aa !important;
  }
  .bg-grey-1 {
    background-color: #00000000 !important;
  }
</style>
