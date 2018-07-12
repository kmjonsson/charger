
<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="page">
        <component :is="view_component" :page="page"></component>
      </div>
      <Error404 v-if="notFound" :message="notFound"/>
    </transition>
  </div>
</template>

<script>

import yaml from 'yaml-js'
import axios from 'axios'

import DefaultView from './DefaultView.vue'
import ImageView from './ImageView.vue'
import Error404 from './Error404.vue'

export default {
  name: 'MyView',
  props: ['id'],
  data () {
    return {
      page: null,
      notFound: null,
    }
  },
  created () {
    this.load();
  },
  computed: {
    view_component() {
      if(this.page !== undefined && this.page.view !== undefined) {
        return this.page.view;
      }
      return "DefaultView";
    }
  },
  watch: {
    'id': 'load'
  },
  methods: {
    load () {
      this.page = null;
      this.notFound = null;
      axios.get("/data/" + this.id + ".yaml", {
        'responseType': 'text'
      }).then(r => {
        let doc = r.data.split("---");
        doc.shift();
        let meta = yaml.load(doc.shift());
        let body = doc.join("---");
        return { meta, body };
      }).then(r => { this.page = r.meta; this.page.body = r.body })
      .catch(e => {
        this.notFound = "'/view/" + this.id + "' does not exist";
      });
    },
  },
  components: {
    DefaultView,Error404,ImageView
  }
}

</script>

<style scoped>
</style>
