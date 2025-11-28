<template>
  <div id="formContainer">
    <form action="#" @submit.prevent="handleSearch">
      <formInput 
        :placeholder="inputPlaceholder" 
        @inputValue="lineNumber = $event"
      />
      <formButton 
        :buttonText="buttonText1"
        @click="handleLineNumberSearch"
      />
      <formButton 
        :buttonText="buttonText2" 
        :backgroundColor="'secondary'"
        @click="handleAllAnnouncements"
      />
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
      lineNumber: '' 
    }
  },
  components: {
    formInput,
    formButton
  },
  methods: {
    handleLineNumberSearch() {
      this.$emit('search-announcements', this.lineNumber);
    },
    handleAllAnnouncements() {
      this.$emit('search-announcements', null);
      this.lineNumber = ''; // Clear the input
    },
    handleSearch() {
      this.handleLineNumberSearch();
    }
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
