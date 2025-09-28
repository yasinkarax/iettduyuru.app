<template>
 <searchForm/>
 <div id="announcement">
  <announcement/>
  <announcement/>
  <announcement/>
  <announcement/>
 </div>
</template>
<script>
import searchForm from '@/components/form/searchForm.vue'
import announcement from '@/components/announcement.vue'

 export default {
  components: {
    searchForm,
    announcement
  }
 }
 /**
  duyurulara her bir duyuru ayrı ayrı eklenecek

  */
</script>
<style scoped></style>
