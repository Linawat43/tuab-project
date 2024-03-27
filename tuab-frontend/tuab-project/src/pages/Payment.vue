<template lang="">
  <div class="container">
      <body>
          <div class="menubar">
              <br><br>
              <p Align=center><button class="backbtn" @click="backverify"><span> BACK </span></button></p><br>
          </div>

          <div class="content">
              <br><br><br>
              <h1>Bank Transfer</h1><br><br>
              <center>
                <h2>20 THB</h2><br>
                <img src="bkkbank.jpg" width=60% height=20%>
              </center>
              <br>
              <h5>Please check the account no., account name, and the amount of money prior<br>to completing your transfer</h5>
              <h3>Note: Please finish your payment and upload slip photo within 10 minutes</h3>
              
              <form enctype="multipart/form-data">
                      <center>
                          <label for="img">Upload slip photo</label>
                          <input class="imgdata" type="file" id="img" name="img" accept="image/*">
                      </center>
              </form>
              <h6>Note: After uploading your slip photo, please wait for our confirming</h6>
              <center><button class="submit" type="submit" @click="openPopup">UPLOAD</button></center>
          </div>

          <div class="popup" id="popup">
            <img src="paychecked.png" width=30% height=30%><br>
                <h7>Thank you for supporting us!</h7><br>
                <h8>We have recieving your slip photo, Please wait for our confirming</h8><br>
                <button type="submit" @click="closePopup">DONE</button>
          </div>  
      </body>
  </div>
</template>
<script>
export default {
  methods: {
      backverify () {
          this.$router.push('/verify-info')
      },

      openPopup(){
      popup.classList.add('open-popup')
      },
      
      closePopup(){
        this.$router.push('/General-Home')
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
  padding-bottom:48%;
  float: left;
  display: flex;
  flex-direction: column;
}

.content {
  background-color: #DFE9F5;
  width: 75%;
  float: left;
  display: flex;
  flex-direction: column;
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
  color: #013399;
  font-size: 350%;
  font-family: Verdana;
  font-weight: bold;
  text-align: center;
  padding-top: 1%;
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 59%;
  align-items: center;
  border-color: #013399;
  border: 3px solid;
}

h3 {
  color: #013399;
  font-size: 110%;
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

h5 {
  color: #ED2939;
  font-size: 130%;
  font-family: Verdana;
  font-weight: bold;
  text-align: center;
}

h6 {
  color: #013399;
  font-size: 90%;
  font-family: Verdana;
  text-align: center;
  padding-top: 5%;
  padding-bottom: 1%;
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
  margin-bottom: 5%;
}

.imgdata {
  background-color: #FFFFFF;
  border-style: groove;
  padding-left: 0.5%;
  margin: auto;
  color: #737373;
}

input[type=file]::file-selector-button {
color: #000000;
cursor: pointer;
}

/* PopUp */
.popup{
    width: 55%;
    background: #ebebeb;
    border-radius: 10px;
    box-shadow: 0 5px 5px rgba(0,0,0,0.2);
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.1);
    text-align: center;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
}

.open-popup{
    visibility: visible;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
}

.popup img{
    padding-top: 8%;
    padding-bottom: 5%;
}

.popup h7{
    font-size: 200%;
    font-weight: bold;
    font-family: Verdana;
    text-align: center;
    color: #000000;
}

.popup h8{
    font-size: 140%;
    font-family: Verdana;
    text-align: center;
    color: #000000;
}

.popup button{
    width: 60%;
    margin-top: 7%;
    margin-bottom: 7%;
    padding: 10px 0;
    background-color: #013399;
    color: #FFFFFF;
    font-family: Verdana;
    font-size: 120%;
    font-weight: bolder;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 5px 5px rgba(0,0,0,0.2);
}

.popup button:hover{
    width: 60%;
    margin-top: 7%;
    margin-bottom: 7%;
    padding: 10px 0;
    background-color: #3871c5;
    color: #FFFFFF;
    font-family: Verdana;
    font-size: 120%;
    font-weight: bolder;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 5px 5px rgba(0,0,0,0.2);
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