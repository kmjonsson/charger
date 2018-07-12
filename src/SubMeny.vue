

<template>
  <div class="content">
    <ul>
      <li v-for="m in submeny" :key="m.title">
        <Link :link="m"/>
      </li>
    </ul>
  </div>
</template>

<script>

import Link from './Link.vue'

export default {
  name: 'SubMeny',
  props: ['submeny'],
  components: {
    Link
  }
}

</script>

<style scoped>
</style>
