<template>
  <input
    id="formInput"
    :type="type"
    :placeholder="placeholder"
    @input="$emit('inputValue', $event.target.value)"
  >
</template>
<script>
export default {
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
  }
}
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
