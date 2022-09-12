<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <SqlExpressionSearch/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SqlExpressionSearch from './pages/SqlExpressionSearch.vue'
import './assets/tailwind.css'
import './assets/fonts/circular/circular.css'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SqlExpressionSearch
  }
}
</script>

<style>
#app {
  font-family: Circular;
}
</style>
