<template>
  <input
    id="formInput"
    :type="type"
    :placeholder="placeholder"
    @input="$emit('inputValue', ($event.target as HTMLInputElement).value)"
  >
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'formInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Hat ara'
    },
  },
  emits: ['inputValue']
})
</script>
<style lang='sass' scoped>
/**sass imports */
@use '@/assets/style/_variables.sass' as *
@use '@/assets/style/_mixin.sass' as *

#formInput
  +formInput($inputPhFSize, $inputRadius, $inputPadding, $inputPhFont, $inputColor)
  outline: none
  border: none
  box-sizing: border-box
  &:focus
    outline: 3px solid $inputFocus
    //scale: 1.3
</style>
