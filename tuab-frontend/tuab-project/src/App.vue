<template>
  <div id="app">
    <header class="hd">
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
#app {
display: flex;
flex-direction: column;
min-height: 100vh;
}
.hd {
width:100%;
background-color: #275496;
}
.logo {
padding-left: 5%;
}
</style>