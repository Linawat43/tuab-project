<!-- <script setup>
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
</style> -->

<template>
  <div id="app" class="container">
    <header>
      <div><img src="logo.png" width=600px height=200px></div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
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
.container {
  width: 90%; /* Example of percentage-based width */
  max-width: 1200px; /* Example of max-width */
  margin: 0 auto; /* Center the container */
}

/* Example of media query for adjusting styles based on screen width */
@media screen and (max-width: 768px) {
  .container {
    width: 100%; /* Adjust width for smaller screens */
    padding: 0 20px; /* Example of adjusting padding */
  }
}
</style>