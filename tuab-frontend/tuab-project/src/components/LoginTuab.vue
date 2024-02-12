<template lang="">
    <div>
        <body>
                <br><br><br>
            <form @submit.prevent="login">
                <p Align="center"><label for="username">Username</label></p>
                <p Align="center"><input type="text" v-model="username"></p><br>
                <p Align="center"><label for="password">Password</label></p>
                <p Align="center"><input type="password" v-model="password"></p>
                <p Align="center"><note>*Login via TU account</note></p>
                <br><br>
                <p Align="center"><button type="submit">LOGIN</button></p>
            </form>
        </body>
    </div>
</template>
<script>
import axios from 'axios';

// export default {
//   methods: {
//     async login() {
//       try {
//         const response = await axios.post('http://localhost:3000/login', {
//           username: this.username,
//           password: this.password,
//         });

//         console.log('Login successfull:', response.data);

//         this.$route.push('/general-home');
//       }catch (error) {
//         console.error('Error', error.response.data);
//       }
//     },
//   },
//   data() {
//     return {
//       username: '',
//       password: '',
//     };
//   },
// };

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
    //   alert('hello');
        try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.$data.username,
          password: this.$data.password,
        });

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
    width: 500px;
    height: 50px;
    border: none;
    border-radius: 10px;
    padding-left: 20px;
}

button {
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: sans-serif;
    font-size: 20px;
    width: 350px;
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
</style>