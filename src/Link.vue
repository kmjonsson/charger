
<template>
    <router-link v-if="link.page" :to="{name:'page',params: { id: link.page }}" :class="link_class">{{link.title}}</router-link>
    <a :href="link.url" v-else :class="link_class">{{link.title}}</a>
</template>

<script>

export default {
  name: 'Link',
  props: ['link','link_class'],
}

</script>