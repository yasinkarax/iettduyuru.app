<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
/* Global resets if needed, but Tailwind handles most */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
