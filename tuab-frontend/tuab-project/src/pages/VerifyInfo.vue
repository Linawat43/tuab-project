<template lang="">
    <div class="container">
        <body>
            <div class="menubar">
                <br><br>
                <p Align=center><button class="menu" @click="backbook"> BACK </button></p><br>
            </div>

            <div class="content">
                <br><br><br>
                <h1>Please verify information</h1><br>
                <br><br>
                <h2>Date</h2><div class="info"> DD/MM/YYYY </div><br><br>
                <h2>Lane</h2><div class="info"> Lane 1 </div><br><br>
                <h2>Time</h2><div class="info"> 17.00 </div><br><br>
                <h2>Name</h2><div class="info"> XXXX XXXXXX </div><br><br>
                <h2>Student ID</h2><div class="info"> 6209XXXXXX </div><br><br>
                <h2>Tel Number</h2><input type="text" v-model="tel"><br>
                <h3>Please fill-in and verify your tel number (example: 0812345678)*</h3><br>
                <center><button class="submit" type="submit">SUBMIT</button></center>
            </div>
        </body>
    </div>
</template>
<script>
export default {
    methods: {
        backbook () {
            this.$router.push('/booking')
        }
    }
}
</script>

<style scoped>
body {
    background-color: #DFE9F5;
}

.menubar {
    background-color: #abc3e8;
    width: 25%;
    height:100%;
    padding-bottom: 57%;
    float: left;
}

.content {
    background-color: #DFE9F5;
    width: 75%;
    float: left;
}
.menu {
    color: #000000;
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 100%;
    width: 80%;
    height: 60px;
    border-style: outset;
    border-radius: 10px;
    cursor: pointer;
}

h1 {
    color: #000000;
    font-size: 200%;
    font-weight: bold;
    font-family: Verdana;
    padding-left: 10%;
}

h2 {
    color: #000000;
    font-size: 150%;
    font-family: Verdana;
    float: left;
    margin-left: 15%;
}

h3 {
    color: #737373;
    font-size: 90%;
    font-family: Verdana;
    float: left;
    margin-left: 35%;
}

.info {
    background-color:#C5D4EB;
    color: #000000;
    border-style: none;
    border-radius: 10px;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 120%;
    width: 50%;
    height: 40px;
    margin-left: 35%;
    padding-top: 0.5%;
    text-align: center;
}

input {
    background-color:#C5D4EB;
    color: #000000;
    border-style: none;
    border-radius: 10px;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 120%;
    width: 50%;
    height: 40px;
    text-align: center;
    margin-left: 8%;
}

.submit {
    color: #000000;
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 120%;
    width: 25%;
    height: 50px;
    border-style: outset;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10%;
    margin-bottom: 10%;
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
@media screen and (max-width: 576px) {
  .container {
    width: 100%;
    padding: 0 20px;
  }
  .namebar {
    width: 100%;
    padding: 0 20px;
  }
}
</style>