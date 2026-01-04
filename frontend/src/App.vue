<template>
  <settings/>
  <mainMenu/>
  <logo/>
  <main role="main" aria-label="Ana içerik">
    <RouterView></RouterView>
  </main>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import mainMenu from '@/components/menu.vue'
import logo from '@/components/logo.vue'
import settings from '@/components/settings.vue'

export default defineComponent({
  components: {
    mainMenu,
    logo,
    settings
  }
})
</script>
<style scoped>

</style>
