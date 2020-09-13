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
      <div class="column" style="padding-left: 40px;">
        <template id="isLogin">
          <div v-if="isLogin" class="text-center">
            <round-image :diameter="120" url="bgs/index.jpg" style="margin-top: 50px;"/>
            <div style="font-size: 20px;">Jooyong Kim
              <q-icon name="settings" style="opacity: 0.2"/>
            </div>
            <div class="row justify-center q-mt-sm" style="font-size: 10px;">
              <div class="text-ml-yellow">팔로워</div>
              <div>&emsp;17&emsp;</div>
              <div class="text-ml-yellow">팔로잉</div>
              <div>&emsp;42&emsp;</div>
              <div class="text-ml-yellow">프로젝트</div>
              <div>&emsp;3</div>
            </div>
            <q-btn unelevated rounded color="black" label="Go to my channel" text-color="ml-yellow" class="q-mt-md"
                   style="font-size: 10px;"/>
            <div class="column" style="margin-top: 40px;">
              <div class="text-ml-yellow text-subtitle2 text-left q-mt-lg">나의 프로젝트</div>
              <div style="max-width: 350px">
                <hr style="border-color: darkgray; margin: 1px;">
                <div style="height: 100px; max-height: 200px;">
                  <q-scroll-area class="fit" style="max-width: 300px;">
                    <q-list dark>
                      <div v-for="n in 10" :key="n">
                        <q-item clickable v-ripple style="padding:0px;">
                          <q-item-section avatar>
                            <q-avatar square>
                              <img src="bgs/index.jpg">
                            </q-avatar>
                          </q-item-section>
                          <q-item-section class="text-left">
                            <q-item-label>Avatar-type icon</q-item-label>
                            <q-item-label caption style="font-size: 6px; color: darkgray">sdsfs fdfda dadadf ebuie bfh iji
                              osjoaj dsi
                            </q-item-label>
                          </q-item-section>
                          <q-item-section side>
                            <q-icon name="reorder" size="30px"></q-icon>
                          </q-item-section>
                        </q-item>
                      </div>
                      <hr style="border-color: darkgray; margin: 1px;">
                    </q-list>
                  </q-scroll-area>
                </div>
              </div>
              <div class="text-ml-yellow text-subtitle2 text-left q-mt-lg">참여한 프로젝트</div>
              <div style="max-width: 350px">
                <q-list dark>
                  <hr style="border-color: darkgray; margin: 1px;">
                  <q-item clickable v-ripple style="padding:0px;">
                    <q-item-section avatar>
                      <q-avatar color="teal" text-color="white" icon="bluetooth"/>
                    </q-item-section>
                    <q-item-section class="text-left">
                      <q-item-label>Avatar-type icon</q-item-label>
                      <q-item-label caption style="font-size: 6px; color: darkgray">sdsfs fdfda dadadf ebuie bfh iji
                        osjoaj dsi
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon name="reorder" size="30px"></q-icon>
                    </q-item-section>
                  </q-item>
                  <hr style="border-color: darkgray; margin: 1px;">
                  <q-item clickable v-ripple style="padding:0px;">
                    <q-item-section avatar>
                    </q-item-section>
                    <q-item-section class="text-left">
                      <q-item-label>Avatar-type icon</q-item-label>
                      <q-item-label caption style="font-size: 6px; color: darkgray">sdsfs fdfda dadadf ebuie bfh iji
                        osjoaj dsi
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon name="reorder" size="30px"></q-icon>
                    </q-item-section>
                  </q-item>
                  <hr style="border-color: darkgray; margin: 1px;">
                </q-list>
              </div>
              <div class="text-ml-yellow text-subtitle2 text-left q-mt-lg">나의 재생목록</div>
              <div style="max-width: 350px">
                <q-list dark>
                  <hr style="border-color: darkgray; margin: 1px;">
                  <q-item clickable v-ripple style="padding:0px;">
                    <q-item-section avatar>
                      <q-avatar square>
                        <img src="bgs/index.jpg">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section class="text-left">
                      <q-item-label>Avatar-type icon</q-item-label>
                      <q-item-label caption style="font-size: 6px; color: darkgray">sdsfs fdfda dadadf ebuie bfh iji
                        osjoaj dsi
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon name="reorder" size="30px"></q-icon>
                    </q-item-section>
                  </q-item>
                  <hr style="border-color: darkgray; margin: 1px;">
                  <q-item clickable v-ripple style="padding:0px;">
                    <q-item-section avatar>
                      <q-avatar color="teal" text-color="white" icon="bluetooth"/>
                    </q-item-section>
                    <q-item-section class="text-left">
                      <q-item-label>Avatar-type icon</q-item-label>
                      <q-item-label caption style="font-size: 6px; color: darkgray">sdsfs fdfda dadadf ebuie bfh iji
                        osjoaj dsi
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon name="reorder" size="30px"></q-icon>
                    </q-item-section>
                  </q-item>
                  <hr style="border-color: darkgray; margin: 1px;">
                </q-list>
              </div>
            </div>
          </div>
          <div v-else>
            <div style="font-size: 20px;" @click="isLogin = ! isLogin">Sign In</div>
          </div>
        </template>
      </div>
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
import RoundImage from 'components/RoundImage'

export default {
  name: 'MainLayout',
  components: { RoundImage },
  data () {
    return {
      leftDrawerOpen: false,
      isLogin: false
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

  .bg-grey-1 {
    background-color: #00000000 !important;
  }

  .fade-right-enter-active, .fade-right-leave-active {
    transition: all 2.0s ease;
  }

  .fade-right-enter, .fade-right-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }

  .text-ml-yellow {
    color: #ffcc57;
  }

  .text-ml-white {
    color: #dfdfdf;
  }
</style>
