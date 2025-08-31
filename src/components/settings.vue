<template>
  <div id="theme">
    <input type="checkbox" name="switch" role="switch" id="theme-checkbox" disabled>
    <label id="theme-label" for="theme-checkbox">
      <!--moon-->
      <svg xmlns="http://www.w3.org/2000/svg" id="moon" width="180" height="160" viewBox="0 0 180 160" fill="none">
        <path class="cloud" d="M174.906 19.6426C174.913 19.4293 174.917 19.2151 174.917 19C174.917 8.50659 166.496 0 156.108 0C147.868 0 140.866 5.35301 138.323 12.8044C136.496 11.8416 134.419 11.2973 132.217 11.2973C124.917 11.2973 119 17.2749 119 24.6486C119 32.0224 124.917 38 132.217 38L156.134 38H170.342C175.676 38 180 33.6317 180 28.2432C180 24.5226 177.938 21.2883 174.906 19.6426Z" fill="white"/>
        <path d="M161.381 134.958C163.864 132.398 161.465 128.334 157.907 128.609C155.749 128.776 153.568 128.861 151.366 128.861C105.154 128.861 67.6917 91.4279 67.6917 45.252C67.6917 31.0498 71.2356 17.6746 77.488 5.96121C79.1698 2.81045 76.398 -1.01666 73.0558 0.247987C41.9024 12.036 19.75 42.1641 19.75 77.4703C19.75 123.05 56.6703 160 102.214 160C125.424 160 146.395 150.403 161.381 134.958Z" fill="#303030" fill-opacity="0.7"/>
        <path  class="cloud" d="M73.3195 122.599C73.3287 122.321 73.3334 122.042 73.3334 121.762C73.3334 108.086 62.2897 97 48.6667 97C37.86 97 28.6764 103.976 25.3412 113.687C22.9459 112.433 20.2222 111.723 17.3333 111.723C7.7604 111.723 0 119.514 0 129.124C0 138.733 7.7604 146.524 17.3333 146.524L48.6999 146.524H67.3333C74.3289 146.524 80 140.831 80 133.808C80 128.959 77.2962 124.744 73.3195 122.599Z" fill="white"/>
      </svg>
      <!--sun-->
      <svg xmlns="http://www.w3.org/2000/svg" id="sun" width="200" height="180" viewBox="0 0 200 180" fill="none">
        <g clip-path="url(#clip0_113_755)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M100 177C148.049 177 187 138.049 187 90C187 41.9512 148.049 3 100 3C51.9512 3 13 41.9512 13 90C13 138.049 51.9512 177 100 177ZM190 90C190 139.706 149.706 180 100 180C50.2944 180 10 139.706 10 90C10 40.2944 50.2944 0 100 0C149.706 0 190 40.2944 190 90Z" fill="#FFF308" fill-opacity="0.2"/>
        <path  fill-rule="evenodd" clip-rule="evenodd" d="M99.5 165C141.198 165 175 131.198 175 89.5C175 47.8025 141.198 14 99.5 14C57.8025 14 24 47.8025 24 89.5C24 131.198 57.8025 165 99.5 165ZM179 89.5C179 133.407 143.407 169 99.5 169C55.5934 169 20 133.407 20 89.5C20 45.5934 55.5934 10 99.5 10C143.407 10 179 45.5934 179 89.5Z" fill="#FFF308" fill-opacity="0.6"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M99.5 157C136.779 157 167 126.779 167 89.5C167 52.2208 136.779 22 99.5 22C62.2208 22 32 52.2208 32 89.5C32 126.779 62.2208 157 99.5 157Z" fill="#FFEC65"/>
        </g>
        <path class="cloud" d="M189.144 61.3529C189.159 60.9038 189.167 60.4528 189.167 60C189.167 37.9086 171.221 20 149.083 20C131.522 20 116.599 31.2695 111.179 46.9567C107.287 44.9298 102.861 43.7838 98.1667 43.7838C82.6107 43.7838 70 56.3682 70 71.8919C70 87.4156 82.6107 100 98.1667 100L149.137 100H179.417C190.785 100 200 90.8037 200 79.4594C200 71.6264 195.606 64.8175 189.144 61.3529Z" fill="white"/>
        <path class="cloud" d="M73.3195 132.599C73.3287 132.321 73.3334 132.042 73.3334 131.762C73.3334 118.086 62.2897 107 48.6667 107C37.86 107 28.6764 113.976 25.3412 123.687C22.9459 122.433 20.2222 121.723 17.3333 121.723C7.7604 121.723 0 129.514 0 139.124C0 148.733 7.7604 156.524 17.3333 156.524L48.6999 156.524H67.3333C74.3289 156.524 80 150.831 80 143.808C80 138.959 77.2962 134.744 73.3195 132.599Z" fill="white"/>
        <defs>
        <clipPath id="clip0_113_755">
        <rect width="180" height="180" fill="white" transform="translate(10)"/>
        </clipPath>
        </defs>
      </svg>
    </label>
  </div>
</template>
<script>
export default {
  name: 'settings',
  data() {
    return {

    }
  }
}
</script>
<style scoped lang="sass">
#theme
  width: max-content
  top: 29px
  position: relative
  z-index: 9999999999

#theme-checkbox
  display: none
  &:checked + #theme-label::after
    transform: translate(-54px)


  &:checked + #theme-label #sun
    scale: 2.5

  &:checked + #theme-label #moon
    scale: 1
#theme-label
  width: 94px
  height: 35px
  display: flex
  border-radius: 20px
  box-sizing: border-box
  border: 2px solid grey
  position: relative
  padding: 0 10px
  justify-content: space-between
  align-items: center
  &::after
    transition-duration: .3s
    position: absolute
    border-radius: 50%
    content: ''
    height: 97%
    right: 3px
    aspect-ratio: 1/1
    background: #4a4a4a

svg
  width: 20px
  transition-duration: .3s

#sun
  position: relative

#moon
  position: relative
  left: 0px
  scale: 2.3
  path
    fill: white
    fill-opacity: 1

.cloud
  fill-opacity: 0.5 !important
</style>
