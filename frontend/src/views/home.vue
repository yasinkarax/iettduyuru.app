<template>
  <SearchForm @search-announcements="searchByLineNumber" />
  <div id="announcement">
    <Announcement v-for="(item, index) in announcements" 
    :key="index" 
    :busId="item.HATKODU"
    :busAnnouncement="item.MESAJ" />
  </div>
</template>
<script>
import SearchForm from '@/components/form/searchForm.vue'
import Announcement from '@/components/announcement.vue'

export default {
  name: 'Home',
  components: {
    SearchForm,
    Announcement
  },
  data() {
    return {
      announcements: [],
      error: ''
    }
  },
  methods: {
    async fetchAnnouncements(hatKodu = null) {
      try {
        let url = 'http://localhost:3000/api/announcements';
        
        if (hatKodu) {
          url += `?hatKodu=${hatKodu}`;
        }
        
        const response = await fetch(url);
        const result = await response.json();

        if (result.success) {
          console.log('Announcements received:', result.data);
          this.announcements = result.data;
        } else {
          console.error('API returned error:', result.message);
          this.error = result.message || 'Duruyular alınamadı';
        }
      } catch (error) {
        console.error('Fetch error:', error);
        this.error = 'Duruyular yüklenirken bir hata oluştu';
      }
    },
    searchByLineNumber(lineNumber) {
      if (lineNumber) {
        this.fetchAnnouncements(lineNumber);
      } else {
        this.fetchAnnouncements();
      }
    }
  },
  mounted(){
    this.fetchAnnouncements();
  } 
}
</script>
<style scoped></style>
