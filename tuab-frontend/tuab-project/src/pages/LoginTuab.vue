<template>
  <div id="Login" class="main-box">
      <body>
              <br><br><br><br>
          <form @submit.prevent="login">
              <p Align="center"><label for="username">Username</label></p>
              <p Align="center"><input type="text" v-model="username"></p><br>
              <p Align="center"><label for="password">Password</label></p>
              <p Align="center"><input type="password" v-model="password"></p>
              <br><br>
              <p Align="center" class="note">*Login via TU account</p>
              <p Align="center"><button class="login" type="submit">LOGIN</button></p>
          </form>
          <br><br><br><br><br><br><br><br>

      </body>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
        try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.$data.username,
          password: this.$data.password,
        });
        if (response.data.status == 'ok'){
          localStorage.setItem("username", response.data.name);
          localStorage.setItem("role", response.data.roles);
          if (response.data.roles == '1'){
            this.$router.replace("general-home");
          }
          else if (response.data.roles == '2'){
            this.$router.replace("superStaff-home");
          }
          else if (response.data.roles == '3'){
            this.$router.replace("staff-home");
          }
          // alert(response.data.name);
        }
        if (response.data.status == 'error'){
          alert('Invalid Username or Password!');
        }
        else{
          this.errorMessage = response.data.message;
        }
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error.response.data);
        
      }
    },
  },
};
</script>
<style scoped>
body {
    background-color: #DFE9F5;
  }

label {
    color: #000000;
    font-size: 130%;
    font-family: sans-serif;
    padding-top: 30px;
}

div {
    height:max-content;
    width:100%;
    background-color: #275496;
    }

input {
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: sans-serif;
    font-size: 130%;
    width: 50%;
    height: 50px;
    border: none;
    border-radius: 10px;
    padding-left: 2%;
}

.login {
  color: #000000;
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: sans-serif;
    font-size: 120%;
    width: 35%;
    height: 50px;
    border-style: outset;
    border-radius: 10px;
    cursor: pointer;
}

.note {
    color: #000000;
    font-size: 90%;
    font-family: sans-serif;
    padding-bottom: 1%;
}

.info {
    color: #FFFFFF;
    font-size: 90%;
    font-family: Verdana;
    padding-left: 5%;
}
.main-box {
  height:max-content;
  width:100%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .main-box {
    width: 100%;
    padding: 0 20px;
  }
}
</style>