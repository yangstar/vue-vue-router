<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li>
        <li><router-link :to="{ name: 'about' }">about</router-link></li>
        <!-- <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li> -->
      </ul>
      <router-view class="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 1000px;
}
</style>
