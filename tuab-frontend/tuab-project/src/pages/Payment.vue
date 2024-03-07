<template lang="">
    <div class="container">
        <body>
            <div class="menubar">
                <br><br>
                <p Align=center><button class="backbtn" @click="backverify"><span> BACK </span></button></p><br>
            </div>

            <div class="content">
                <br><br><br>
                <h1>Bank Transfer : Amount 20 THB</h1><br><br>
                <center><img src="bkkbank.png" width=60% height=20%></center>
                <h2>Please check information before confirming payment</h2>
                <h3>Noted: Please finish your payment within 10 minutes</h3>
                
                <form enctype="multipart/form-data">
                        <center>
                            <label for="img">Select image:</label>
                            <input class="imgdata" type="file" id="img" name="img" accept="image/*">
                        </center>
                </form>
                <center><button class="submit" type="submit">SAVE</button></center>
            </div>
        </body>
    </div>
</template>


<script>
export default {
    methods: {
        backverify () {
            this.$router.push('/verify-info')
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
    height: 100%;
    padding-bottom: 40%;
    float: left;
}

.content {
    background-color: #DFE9F5;
    width: 75%;
    float: left;
}

.backbtn {
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

.backbtn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.6s;
}

.backbtn span:after {
  content:'<';
  position: absolute;
  opacity: 0;
  top: 0;
  left: -5%;
  transition: 0.6s;
}

.backbtn:hover span {
  padding-left: 10%;
}

.backbtn:hover span:after {
  opacity: 1;
  left: 0;
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
    font-size: 140%;
    font-family: Verdana;
    font-weight: bold;
    text-align: center;
    padding-top: 1%;
}

h3 {
    color: #737373;
    font-size: 90%;
    font-family: Verdana;
    text-align: center;
    padding-bottom: 5%;
}

h4 {
    color: #000000;
    font-size: 150%;
    font-family: Verdana;
    float: left;
    margin-left: 20%;
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

label {
    color: #000000;
    font-size: 150%;
    font-family: Verdana;
    padding-right: 1%;
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
    margin-left: 10%;
}

.submit {
    color: #FFFFFF;
    background-color: #3871c5;
    font-family: Verdana;
    font-size: 120%;
    font-weight: bolder;
    width: 25%;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 5%;
    margin-bottom: 5%;
}
.submit:hover {
    color: #FFFFFF;
    background-color: #649aeb;
    font-family: Verdana;
    font-size: 120%;
    width: 25%;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 5%;
    margin-bottom: 5%;
}

.imgdata {
    background-color: #FFFFFF;
    border-style: groove;
    padding-left: 0.5%;
    margin: auto;
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
