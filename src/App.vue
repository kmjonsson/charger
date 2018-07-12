
<template>
  <div>
    <Meny/>
    <router-view></router-view>
  </div>
</template>

<script>

import Meny from './Meny.vue'

export default {
  name: 'App',
  components: {
    Meny
  }
}

</script>

<style scoped>
</style>

<style global>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
html { overflow-y: auto; }
</style>