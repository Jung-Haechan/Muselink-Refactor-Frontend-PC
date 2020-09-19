<template>
  <div>
    <div class="text-primary text-subtitle2 text-left q-mt-lg">{{ label }}</div>
    <div style="max-width: 350px">
      <hr style="border-color: darkgray; margin: 1px;">
      <q-scroll-area :style="{ height: listHeight + `px` }">
        <q-list dark>
          <div :class="listClass" v-for="n in 5" :key="n">
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
</template>

<script>
export default {
  name: 'SmallList',
  props: {
    items: Array,
    label: String,
    listClass: String
  },
  computed: {
    listHeight () {
      var smallList = document.getElementsByClassName(this.listClass)
      console.log(smallList.length)
      if (smallList.length === 0) {
        return 100
      } else if (smallList.length === 1) {
        return 50
      } else if (smallList.length === 2) {
        return 100
      } else if (smallList.length === 3) {
        return 150
      } else {
        return 200
      }
    }
  }
}
</script>
