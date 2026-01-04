
<template>
  <div id="announcement">
    <div id="busId"><span>{{ busId }}</span></div>
    <div id="busAnno">
      {{ busAnnouncement }}
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'announcement',
  props: {
    busId: {
      type: String,
      default: 'Hat kodu',
      required: true
    },
    busAnnouncement: {
      type: String,
      default: 'Hat duyuru',
      required: true
    }
  }
})
</script>
<style scoped lang="sass">
@use '@/assets/style/_variables' as *
#announcement
  display: flex
  justify-content: center
  align-items: center
  gap: 35px
  padding: 29px 13px
  background-color: #1e2a38
  border-radius: 12px
  padding: 20px
  margin: 20px 0
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4)

#busId
 width: 110px
 aspect-ratio: 1/1
 flex-shrink: 0
 display: flex
 text-align: center
 justify-content: center
 align-items: center
 border-radius: 50%
 background: #fff
 color: #000
 text-transform: uppercase
 font-size: $fontSizeHead
 overflow: hidden
 padding: 5px

#busAnno
  font-size: $fontSizeContent
  color: #fff
  text-align: center
</style>
