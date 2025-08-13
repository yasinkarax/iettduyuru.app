<template>
  <button
    @click="$emit('searchBus')"
    :type="buttonType">
    {{ buttonText }}
  </button>
</template>
<script>
export default {
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
    }
  }
}
</script>
<style scoped></style>
