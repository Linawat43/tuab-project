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
        <p Align="center"><button class="login" type="submit"><span>LOGIN</span></button></p>
      </form>
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
          // sessionStorage.setItem("name", response.data.name);
          // sessionStorage.setItem("role", response.data.roles);
          localStorage.setItem('token', response.data.token); // Store JWT token

          axios.get('http://localhost:3000/user-detail', {
            headers: {
              Authorization: `Bearer ${response.data.token}`
            }
          })
          .then(response => {
              // Update the name property with user information retrieved from the server
            localStorage.setItem("username", response.data.username)
            localStorage.setItem("name", response.data.name)
            var roleName;
            let roleID = response.data.roleID
            if (roleID == '1') {
              roleName = "General User"
            } else if (roleID == '2') {
              roleName = "Super Staff"
            } else if (roleID == '3') {
              roleName = "Staff"
            }

            localStorage.setItem("roleName", roleName)

            if (roleID == '1'){
              this.$router.replace("general-home");
            }
            else if (roleID == '2'){
              this.$router.replace("superStaff-home");
            }
            else if (roleID == '3'){
              this.$router.replace("staff-home");
            }
          })
          .catch(error => {
            console.error('Error fetching user information:', error);
          });       
        }
        if (response.data.status == 'error'){
          alert('Invalid Username or Password!');
        }
        else{
          this.errorMessage = response.data.message;
        }
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

h1 {
color: #000000;
font-size: 200%;
font-weight: bolder;
font-family: Verdana;
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
text-align: center;
font-size: 130%;
width: 40%;
height: 50px;
border-radius: 10px;
}

.login {
border-radius: 10px;
background-color: #3871c5;
font-family: sans-serif;
color: #FFFFFF;
text-align: center;
font-size: 130%;
width: 20%;
height: 50px;
transition: all 0.5s;
cursor: pointer;
margin: 5px;
}

.login span {
cursor: pointer;
display: inline-block;
position: relative;
transition: 0.6s;
}

.login span:after {
content:'\00bb';
position: absolute;
opacity: 0;
top: 0;
right: -5%;
transition: 0.6s;
}

.login:hover span {
padding-right: 8%;
}

.login:hover span:after {
opacity: 1;
right: 0;
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