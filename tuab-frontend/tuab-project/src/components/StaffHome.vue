<template lang="">
    <div class="container">
        <body>
            <div class="namebar">
                <name> Staff Mode </name>
                <button class="logout" @click="logout"> LOGOUT </button>
            </div>
            <br><br><br>
            <p Align=center><button class="menu"> BOOKING </button></p><br>
            <p Align=center><button class="menu"> SHIFT SCHEDULE </button></p><br>
            <br><br><br><br><br><br><br><br><br><br>
            <div class="footer">
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
export default {
    methods: {
        logout() {
            this.$router.push('/');
        }
    }
}
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
    height:100%;
    width:100%;
    background-color: #275496;
}
.menu {
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 130%;
    width: 50%;
    height: 60px;
    border-style: outset;
    border-radius: 10px;
    cursor: pointer;
}
.logout {
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 85%;
    width: 15%;
    height: 50px;
    border-style: outset;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 80%;
    /* margin-top: 0%; */
}

h2 {
    color: #000000;
    font-size: 250%;
    font-family: Verdana;
    padding-left: 10%;
}

a {
    color: #000000;
    font-size: 20px;
    font-family: Verdana;
    font-weight: bold;
    padding-top: 30px;
}

info {
    color: #FFFFFF;
    font-size: 90%;
    font-family: Verdana;
    padding-left: 5%;
}

.namebar {
    background-color: #abc3e8;
    width: 100%;
    height: 60px;
    flex-direction: row;
}

name{
    color: #000000;
    font-size: 140%;
    font-family: Verdana;
    padding-left: 10%;
}
.container {
    height:max-content;
    width:100%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 20px;
  }
  .namebar {
    width: 100%;
    padding: 0 20px;
  }
}
/* @media screen and (max-width: 576px) {
  .container {
    width: 100%;
    padding: 0 20px;
  }
  .namebar {
    width: 100%;
    padding: 0 20px;
  }
} */
</style>