<template>
    <button class="logout" @click="logout"><span>LOGOUT</span></button>
</template>

<script>
export default{
    methods: {
        logout() {
            sessionStorage.removeItem("name");
            sessionStorage.removeItem("role");
            // sessionStorage.removeItem("username");
            this.$router.push('/');
        }
    },
}
</script>

<!-- <script>
import axios from 'axios';

export default {
  methods: {
    async logout() {
      try {
        await axios.get('http://localhost:3000/logout');
        localStorage.removeItem('username');
        sessionStorage.removeItem('role');
        this.$router.push('/');
      } catch (error) {
        console.error('Logout error:', error);
      }
    },
  },
};
</script> -->

<style scoped>
.logout {
  border-radius: 10px;
  background-color: #3871c5;
  font-family: Verdana;
  color: #FFFFFF;
  text-align: center;
  font-size: 100%;
  width: 80%;
  height: 60px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.logout span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.6s;
}

.logout span:after {
  content:"<<";
  position: absolute;
  opacity: 0;
  top: 0;
  left: -5%;
  transition: 0.6s;
}

.logout:hover span {
  padding-left: 10%;
}

.logout:hover span:after {
  opacity: 1;
  left: 0;
}
</style>