<script setup>
import LoginTuab from './components/LoginTuab.vue';
import GeneralHome from './components/GeneralHome.vue';
import TuabInformation from './components/TuabInformation.vue';
</script>

<template>
  <div>
    <header>
      <div><img src="logo.png" width=600px height=200px></div>
    </header>

    <main>
      <LoginTuab />
    </main>

    <footer>
      <TuabInformation />
    </footer>
  </div>
</template>

<style scoped>
div {
    height:max-content;
    width:100%;
    background-color: #275496;
    }
</style>

<!-- <template>
  <div>
    <header>
      <div><img src="logo.png" width=600px height=200px></div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
div {
    height:max-content;
    width:100%;
    background-color: #275496;
    }
body {
    background-color: #DFE9F5;
  }
</style> -->