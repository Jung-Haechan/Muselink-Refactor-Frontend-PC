<template>
  <q-input
    outlined dark
    rounded :dense="dense"
    color="primary"
    :label="label"
    v-model="model"
    @input="$emit('input', model)"
  />
</template>

<script>
export default {
  name: 'MlInput',
  props: {
    value: String,
    dense: Boolean,
    label: String
  },
  data () {
    return {
      model: this.value
    }
  }
}
</script>
