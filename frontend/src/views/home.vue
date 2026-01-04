<template>
  <SearchForm @search-announcements="searchByLineNumber" />
  <div id="announcement">
    <Announcement v-for="(item, index) in announcements" 
    :key="index" 
    :busId="item.hatKodu"
    :busAnnouncement="item.mesaj" />
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import SearchForm from '@/components/form/searchForm.vue'
import Announcement from '@/components/announcement.vue'

interface AnnouncementData {
    hatKodu: string
    mesaj: string
  }

  interface ApiResponse {
    success: boolean;
    data?: AnnouncementData[];
    message?: string;
}

export default defineComponent({
  name: 'Home',
  components: {
    SearchForm,
    Announcement
  },
  data() {
    return {
      announcements: [] as AnnouncementData[],
      error: '' as string
    }
  },
  methods: {
    async fetchAnnouncements(hatKodu: string | null = null): Promise<void> {
      try {
        let url = 'http://localhost:3000/api/announcements';
        
        if (hatKodu) {
          url += `?hatKodu=${hatKodu}`;
        }
        
        const response = await fetch(url);
        const result = await response.json() as ApiResponse;

        if (result.success) {
          console.log('Announcements received:', result.data);
          this.announcements = result.data || [];
        } else {
          console.error('API returned error:', result.message);
          this.error = result.message || 'Duruyular alınamadı';
        }
      } catch (error) {
        console.error('Fetch error:', error);
        this.error = 'Duruyular yüklenirken bir hata oluştu';
      }
    },
    searchByLineNumber(lineNumber: string): void {
      if (lineNumber) {
        this.fetchAnnouncements(lineNumber);
      } else {
        this.fetchAnnouncements();
      }
    }
  },
  mounted(): void{
    this.fetchAnnouncements();
  } 
})
</script>
<style scoped></style>
