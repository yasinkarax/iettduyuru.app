<template>
  <button :class="['button', backgroundColor]" @click="$emit('searchBus')" >
    <img src="@/assets/icons/bus.svg" alt="Bus Icon" class="bus-icon" />
    <span>{{buttonText}}</span>
  </button>
</template>
<script>
export default {
  name: 'SearchButton',
  data() {
    return {
      buttonType: 'submit'
      //buttonText: 'Duyuruları al'
    }
  },
  props: {
    buttonText: {
      type: String,
      default: 'Duyuruları al'
    },
    backgroundColor: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
<style lang="sass" scoped>
/**sass imports */
@use '@/assets/style/_variables.sass' as *
@use '@/assets/style/_mixin.sass' as *

.primary
  background-color: #64EAFF

.secondary
  background-color: #fff

.button
  +button($buttonPadding, $buttonFontSize, $buttonFontFamily, none, $buttonRadius )
  display: flex
  align-items: center
  justify-content: center
  gap: 10px
  font-weight: 500
  &:hover
    cursor: pointer
</style>
