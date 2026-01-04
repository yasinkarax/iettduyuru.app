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
<script lang="ts">
import {defineComponent} from 'vue'
import formInput from '@/components/form/formInput.vue'
import formButton from '@/components/form/button.vue'
export default defineComponent({
  data() {
    return {
      inputPlaceholder: 'Otobüs hattı ara' as string,
      buttonText1: 'Otobüsün duyurularını al' as string,
      buttonText2: 'Tüm duyuruları al' as string,
      lineNumber: '' as string
    }
  },
  components: {
    formInput,
    formButton
  },
  emits: ['search-announcements'],
  methods: {
    updateLineNumber(value: string){
      this.lineNumber = value;
    },
    handleLineNumberSearch(): void{
      this.$emit('search-announcements', this.lineNumber);
    },
    handleAllAnnouncements(): void {
      this.$emit('search-announcements', null);
      this.lineNumber = ''; // Clear the input
    },
    handleSearch(): void {
      this.handleLineNumberSearch();
    }
  }
})
</script>
<style lang="sass" scoped>
#formContainer
  margin: 2.44rem 0
  form
    display: flex
    flex-direction: column
    gap: 20px
</style>
