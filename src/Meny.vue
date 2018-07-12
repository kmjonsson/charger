

<template>
  <nav class="navbar is-success is-not-fixed-top">
    <div class="navbar-brand">
      <Link :link="{page:'home',title:'www.fot.nu'}" link_class="navbar-item"/>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" @click="show = !show" v-bind:class="{ 'is-active': show }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{ 'is-active': show }">
      <div class="navbar-end" @click="show=false">
        <Link v-for="m in meny" link_class="navbar-item" :link="m" :key="m.title"></Link>
      </div>
    </div>
  </nav>
</template>

<script>

import yaml from 'yaml-js'
import axios from 'axios'
import Link from './Link.vue'

export default {
  name: 'Meny',
  props: ['page'],
  data () {
    return {
      show: false,
      meny: null
    }
  },
  created () {
    this.load_page();
  },
  methods: {
    load_page() {
      axios.get("/data/meny.yaml", {
        'responseType': 'text'
      }).then(r => yaml.load(r.data)).then(r => { this.meny = r; });
    }
  },
  components: {
    Link
  }
}

</script>

<style scoped>
</style>
