<template>
  <div>
    <img :src="url"
         :style="`width:${diameter}px; height:${diameter}px;`" class="circle-image">
  </div>
</template>

<script>
export default {
  name: 'RoundImage',
  props: {
    diameter: Number,
    url: String
  }
}
</script>

<style>
  .circle-image {
    border-radius: 50%;
  }
</style>
