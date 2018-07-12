

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-9-desktop is-offset-0-desktop is-10-touch is-offset-1-touch">
        <div class="columns">
          <div class="column is-12 has-text-centered">
            <h1 class="is-size-1">{{page.title}}</h1>
            <h2 class="is-size-4" v-if="page.subtitle">{{page.subtitle}}</h2>
          </div>
        </div>
          <component v-bind:is="body"></component>
      </div>
      <div class="column is-3-desktop is-hidden-touch">
        <FocusImage v-if="page.focusImage" :page="page"/>
        <hr v-if="page.focusImage && page.links" />
        <SubMeny v-if="page.links" :submeny="page.links"/>
      </div>
    </div>
    <div class="columns">
        <div class="column is-12 is-hidden-desktop ">
        <hr v-if="page.links" />
        <SubMeny v-if="page.links" :submeny="page.links"/>
      </div>
    </div>
  </div>
</template>

<script>

import converter from './md.js'

import FocusImage from './FocusImage.vue'
import SubMeny from './SubMeny.vue'

export default {
  name: 'DefaultView',
  props: ['page'],
  data () {
    return {
    }
  },
  computed: {
    body() {
      return {
        template: '<div class="content has-text-justified-mobile">' + converter.makeHtml(this.page.body) + "</div>"
      }
    }
  },
  components: {
    FocusImage,SubMeny
  }
}

</script>

<style scoped>
div.indrag {
  margin-left: 8.33333%;
  padding: 0.75rem;
}
</style>