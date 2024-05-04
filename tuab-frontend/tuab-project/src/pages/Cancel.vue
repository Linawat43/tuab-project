<template lang="">
    <div class="container">
        <body>
            <div class="menubar">
              <div class="namebar">
                    <h3>{{roleName}}: {{name}}</h3>
                </div>
                <br><br>
                <p Align=center><button class="backbtn" @click="backhome"><span> BACK </span></button></p><br>
            </div>

            <div class="content">
                <br><br><br>
                <h1>Cancel Booking</h1><br><br>
                <div class="slot">
                  <h2>DD/MM/YYYY</h2><s1>Lane 1</s1><s1>17.00</s1><button class="cancelbtn" @click="openPopup"> CANCEL </button><br>
                </div>
                <br><br>
            </div>
          
            <div class="popup" id="popup">
              <a class="close" @click="closePopup">X</a>
              <img src="warning.png" width=40% height=40%><br>
                <h7>Cancel your booking?</h7><br>
                <h8>Please click SUBMIT below, to cancelling your booking</h8><br>
                <button type="submit" @click="closePopup"> SUBMIT </button>
          </div> 
        </body>
    </div>
</template>

<script>
import NotToken from '../components/NotToken.vue';
export default {
  data() {
        return {
          roleName: '',
          name: '',
        };
    },
    methods: {
        backhome () {
            if(this.roles == '1'){
                this.$router.push('/general-home')
            }
            else if(this.roles == '2'){
                this.$router.push('/superStaff-home')
            }
            else if(this.roles == '3'){
                this.$router.push('/staff-home')
            }
        },
        
        openPopup(){
          popup.classList.add('open-popup')
        },
      
        closePopup(){
          popup.classList.remove('open-popup')
        }
    },
    mixins: [NotToken],
}  
</script>

<style scoped>
body {
    background-color: #DFE9F5;
    width:100%;
}
.namebar {
    background-color: #F9D871;
    width: 100%;
    float: left;
}

h3 {
    color: #000000;
    font-size: 90%;
    font-family: Verdana;
    text-align: center;
    padding-top: 2%;
    padding-bottom: 2%;
    text-transform: uppercase;
}
.menubar {
    background-color: #abc3e8;
    width: 25%;
    height:100%;
    padding-bottom: 47%;
    float: left;
    display: flex;
    flex-direction: column;
}

.content {
    background-color: #DFE9F5;
    width: 75%;
    float: left;
}

.slot {
  background-color: #DFE9F5;
  display: flex;
  flex-direction: row;
  column-gap: 4%;
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
    font-size: 130%;
    font-family: Verdana;
    float: left;
    margin-left: 15%;
}

s1 {
    background-color:#C5D4EB;
    color: #000000;
    font-size: 120%;
    font-family: Verdana;
    border-radius: 10px;
    border-style: none;
    margin: auto;
    padding: auto;
    width: 20%;
    height: 40px;
    padding-top: 0.5%;
    text-align: center;
    
}

.cancelbtn {
  border-radius: 10px;
  background-color: #ED2939;
  font-family: Verdana;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  font-size: 100%;
  width: 15%;
  height: 40px;
}

.cancelbtn:hover {
  border-radius: 10px;
  background-color: #f06772;
  font-family: Verdana;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  font-size: 100%;
  width: 15%;
  height: 40px;
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
    padding-bottom: 2%;
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

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
}

.container {
    display: flex;
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