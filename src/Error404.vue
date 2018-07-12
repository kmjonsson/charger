
<template>
  <div class="container">
    <div class="columns">
      <div class="column is-9-desktop is-offset-0-desktop is-10-touch is-offset-1-touch">
        <div class="columns">
          <div class="column is-12 has-text-centered">
            <h1 class="is-size-1">404 - Page Not Found</h1>
            <h2 class="is-size-4" v-if="message">{{message}}</h2>
          </div>
        </div>
          <!-- body -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Error404',
  props: ['message'],
}

</script>