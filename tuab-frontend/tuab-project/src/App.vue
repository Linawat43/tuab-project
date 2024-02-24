<template>
  <div id="app">
    <header>
      <img class="logo" src="logo.png" width=40% height=30%>
    </header>
    <router-view />
    <Information />
  </div>
</template>

<script>
import Information from './components/Information.vue';

export default {
    name: 'app',
    components: { Information }
}
</script>

<style>
div {
    width:100%;
    background-color: #275496;
    }
body {
    background-color: #DFE9F5;
  }
.logo {
  padding-left: 5%;
}
</style>