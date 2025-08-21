<template>
 <settingsMenu/>
  <logo/>
  <main role="main" aria-label="Ana içerik">
    <RouterView></RouterView>
  </main>
</template>
<script>
import settingsMenu from '@/components/settings-menu.vue'
import logo from '@/components/logo.vue'
export default {
  components: {
    settingsMenu,
    logo,
  }
}
</script>
<style scoped>

</style>
