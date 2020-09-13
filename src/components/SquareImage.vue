<template>
    <img :src="url" :style="`width:${width}px; height:${width}px;`">
</template>

<script>
export default {
  name: 'SquareImage',
  props: {
    width: Number,
    url: String
  }
}
</script>

<style scoped>

</style>
