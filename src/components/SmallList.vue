<template>
  <div>
    <div class="text-primary text-subtitle2 text-left q-mt-lg">{{ label }}</div>
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
  </div>
</template>

<script>
export default {
  name: 'SmallList',
  props: {
    items: Array,
    label: String
  }
}
</script>
