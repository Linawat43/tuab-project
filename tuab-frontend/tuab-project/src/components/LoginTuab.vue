<template>
  <div id="Login" class="main-box">
      <body>
              <br><br><br>
          <form @submit.prevent="login">
              <p Align="center"><label for="username">Username</label></p>
              <p Align="center"><input type="text" v-model="username"></p><br>
              <p Align="center"><label for="password">Password</label></p>
              <p Align="center"><input type="password" v-model="password"></p>
              <p Align="center"><note>*Login via TU account</note></p>
              <br><br>
              <p Align="center"><button class="login" type="submit">LOGIN</button></p>
          </form>
          <br><br><br><br><br><br><br><br>
          <div>
              <br><br>
              <info>TU Archery club information</info><br>
              <info>Facebook Page: TU Archery Club</info><br>
              <info>Instagram: @tuarcheryclub</info><br>
              <info>Monday - Thursday</info><br>
              <info>17.00 - 18.00 pm.</info><br><br><br>
          </div>
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
    //   document.write(5 + 6)
      // alert('hello');
        try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.$data.username,
          password: this.$data.password,
        });
        if (response.data.status == 'ok'){
          if (response.data.roles == '1'){
            this.$router.replace("general-home");
          }
          else if (response.data.roles == '2'){
            this.$router.replace("superStaff-home");
          }
          else if (response.data.roles == '3'){
            this.$router.replace("staff-home");
          }
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
    font-size: 20px;
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
    font-size: 20px;
    width: 50%;
    height: 50px;
    border: none;
    border-radius: 10px;
    padding-left: 20px;
}

.login {
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: sans-serif;
    font-size: 20px;
    width: 35%;
    height: 50px;
    border-style: outset;
    border-radius: 10px;
    cursor: pointer;
}

note {
    color: #000000;
    font-size: 15px;
    font-family: sans-serif;
}

info {
        color: #FFFFFF;
        font-size: 15px;
        font-family: Verdana;
        padding-left: 5%;
}
.main-box {
  height:max-content;
    width:100%;
  margin: 0 auto; /* Center the container */
}

/* Example of media query for adjusting styles based on screen width */
@media screen and (max-width: 768px) {
  .main-box {
    width: 100%; /* Adjust width for smaller screens */
    padding: 0 20px; /* Example of adjusting padding */
  }
}
</style>