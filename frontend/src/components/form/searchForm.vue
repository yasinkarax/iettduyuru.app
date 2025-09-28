<template>
  <div id="formContainer">
    <form action="#">
      <formInput :placeholder="inputPlaceholder" />
      <formButton :buttonText="buttonText1"/>
      <formButton :buttonText="buttonText2" :backgroundColor="'secondary'"/>
    </form>
  </div>
</template>
<script>
import formInput from '@/components/form/formInput.vue'
import formButton from '@/components/form/button.vue'
export default {
  data() {
    return {
      inputPlaceholder: 'Otobüs hattı ara',
      buttonText1: 'Otobüsün duyurularını al',
      buttonText2: 'Tüm duyuruları al',
    }
  },
  components: {
    formInput,
    formButton
  }
}
</script>
<style lang="sass" scoped>
#formContainer
  margin: 2.44rem 0
  form
    display: flex
    flex-direction: column
    gap: 20px
</style>
