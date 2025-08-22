<template>
  <div id="announcement">
 <div id="busId"><span>{{ busId }}</span></div>
 <div id="busAnno">
   {{ busAnno }}
 </div>
  </div>
</template>
<script>
export default {
  name: 'announcement',
  data() {
 return {
   busId: '89km',
   busAnno: "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into ele"
 }
  }
}
</script>
<style scoped lang="sass">
@use '@/assets/style/_variables' as *
#announcement
  display: flex
  justify-content: center
  align-items: center
  gap: 35px
  padding: 29px 13px

#busId
 padding: 28px 9px
 display: flex
 white-space: nowrap
 justify-content: center
 align-items: center
 border-radius: 50%
 background: #fff
 color: #000
 text-transform: uppercase
 font-family: "SF Pro Text"
 font-size: $fontSizeHead

#busAnno
  font-size: $fontSizeContent
  font-family: $fontFamily
  color: #fff
  text-align: center
</style>
