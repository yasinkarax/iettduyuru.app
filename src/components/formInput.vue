<template>
  <input
    :type="type"
    :placeholder="placeholder"
    @input="$emit('inputValue', $event.target.value)"
  >
</template>
<script>
export default {
  name: 'search',
  props: {
    placeholder: {
      type: String,
      default: 'Hat ara'
    },
    type: {
      type: String,
      default: 'text'
    }

  }
}
</script>
<style scoped>

</style>
