<template>
  <q-input
    outlined dark
    rounded
    v-model="model"
    v-bind="$attrs"
    @input="$emit('input', model)"
  />
</template>

<script>
export default {
  name: 'MlInput',
  props: {
    value: String
  },
  data () {
    return {
      model: this.value
    }
  }
}
</script>
