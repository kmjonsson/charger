

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
          <!-- <component v-bind:is="body"></component> -->
          <div class="images">
            <img :src="thumbUrl(n)" v-for="(n,j) in images" :key="j" @click="show(j)" />
          </div>
          <div class="modal" :class="{'is-active': large}">
            <div class="modal-background" style="background-color: rgba(30, 30, 30);"></div>
            <transition v-on:after-leave="showImage" name="fade">
            <div v-if="imageStyle" class="modal-content image" :style="imageStyle" >
                <img :src="imageUrl"style="width: 50%; height:100%;  opacity: 0; position: fixed; left: 0" @click="prevImage"/>
                <img :src="imageUrl"style="width: 50%; height:100%;  opacity: 0; position: fixed; right: 0" @click="nextImage" v-on:keyup.space="nextImage"/>
            </div>
            </transition>
            <button class="modal-close is-large" aria-label="close" @click="hide()"></button>
          </div>
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
  created() {
    for(let i=0;i<7;i++) {
      this.images.push(parseInt(Math.random() * 60000));
    }
    console.log(this.images);
  },
  data () {
    return {
      images: [],
      imageStyle: null,
      imageUrl: null,
      i: 0,
      first: true,
      large: false,
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
  },
  methods: {
    hide() {
      this.large = false;
      this.imageStyle = null;
      this.imageUrl = null;
      this.first = true;
    },
    show(i) {
      this.large = true;
      this.i = i;
      this.loadImage(this.smallUrl(this.images[this.i]));
    },
    smallUrl(i) {
      return 'https://g9.fot.nu/object/small'+i+'.jpg';
    },
    thumbUrl(i) {
      return 'https://g9.fot.nu/object/thumb'+i+'.jpg';
    },
    prevImage() {
      if(this.i > 0) {
        this.show(this.i-1);
      }
    },
    nextImage() {
      if(this.i < this.images.length-1) {
        this.show(this.i+1);
      }
    },
    loadImage(url) {
      this.imageStyle = null;
      this.imageUrl = url;
      return new Promise(function(resolve, reject) {
        var img = new Image()
        img.onload = function() {
          if(this.first) {
            this.showImage();
          }
          resolve(url)
        }.bind(this);
        img.onerror = function() {
          reject(url)
        }
        img.src=url;
      }.bind(this));
    },
    showImage() {
      this.imageStyle = { 'background-image': "url(" + this.imageUrl + ")"};
      this.first = false;
    }
  }
}

</script>

<style scoped>
div.image {
  margin: 0 auto;
  /*height: calc(100vh - 15px);
  width: calc(100vw - 15px);*/
  height: calc(100vh);
  width: calc(100vw);
  background-size: contain;  
  background-repeat: no-repeat;
  background-position: center;
}
div.indrag {
  margin-left: 8.33333%;
  padding: 0.75rem;
}
</style>