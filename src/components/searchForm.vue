<template>
  <form action="#">
    <formInput/>
    <formButton :buttonText="'Otobüsün duyurularını al'"/>
    <formButton :buttonText="'Tüm duyuruları al'"/>
  </form>
</template>
<script>
import formInput from '@/components/formInput.vue'
import formButton from '@/components/button.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    formInput,
    formButton
  }
}
</script>
<style></style>
