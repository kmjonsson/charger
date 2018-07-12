
import Vue from 'vue'

Vue.component('goto-page', {
  template: "<router-link :to=\"{name:'page',params: { id: page }}\"><slot></slot></router-link>",
  props: {
    page: {
      type: String,
      required: true
    }
  }
});