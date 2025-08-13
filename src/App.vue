<template>
 <div class="app">
  <settingsMenu/>

  <main role="main" aria-label="Ana içerik">
    <RouterView></RouterView>

  </main>

 </div>
</template>
<script>
import settingsMenu from '@/components/settings-menu.vue'


export default {
  components: {
    settingsMenu,
  }
}
</script>
<style scoped></style>
