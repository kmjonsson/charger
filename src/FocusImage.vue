

<template>
  <img v-if="page.focusImage" class="focus-image" :src="focusImages[page.focusImage].url" :alt="focusImages[page.focusImage].alt"/>
</template>

<script>

import converter from './md.js'

export default {
  name: 'FocusImage',
  props: ['page'],
  data () {
    return {
      focusImages: {
        radio: { url: '/static/focus/radio_tower256.png', alt: 'Ham radio tower' },
        plane: { url: '/static/focus/plane.png', alt: 'Airplane' },
        fot: { url: '/static/focus/fot.png', alt: 'Fot' }
      }
    }
  }
}

</script>

<style scoped>
img.focus-image {
  padding-top: 0.75rem;
}
</style>