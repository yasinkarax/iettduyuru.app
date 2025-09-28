<template>
  <settings/>
  <mainMenu/>
  <logo/>
  <main role="main" aria-label="Ana içerik">
    <RouterView></RouterView>
  </main>
</template>
<script>
import mainMenu from '@/components/menu.vue'
import logo from '@/components/logo.vue'
import settings from '@/components/settings.vue'

export default {
  components: {
    mainMenu,
    logo,
    settings
  }
}
</script>
<style scoped>

</style>
