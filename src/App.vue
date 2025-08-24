<template>
  <mainMenu/>
  <logo/>
  <main role="main" aria-label="Ana içerik">
    <RouterView></RouterView>
  </main>
</template>
<script>
import mainMenu from '@/components/menu.vue'
import logo from '@/components/logo.vue'
export default {
  components: {
    mainMenu,
    logo,
  }
}
</script>
<style scoped>

</style>
