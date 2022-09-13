<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<script>
import './assets/tailwind.css'
import './assets/fonts/circular/circular.css'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Circular;
}
</style>
