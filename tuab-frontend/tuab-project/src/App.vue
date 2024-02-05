<!-- <script setup>
import LoginTuab from './components/LoginTuab.vue';
import GeneralHome from './components/GeneralHome.vue';
</script>

<template>
  <div>
    <header>
      <div><img src="logo.png" width=600px height=200px></div>
    </header>

    <main>
      <LoginTuab />
    </main>

  </div>
</template>

<style scoped>
div {
    height:max-content;
    width:100%;
    background-color: #275496;
    }
</style> -->

<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background: #2c3e50;
}
</style>