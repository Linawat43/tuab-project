<template lang="">
  <div class="container">
    <body>
      <div class="menubar">
        <div class="namebar">
          <h3>{{roleName}}: {{name}}</h3>
        </div>
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
        <n1>Note: When finish your payment, please insert the payment detail below.</n1>     

        <!-- Payment detail -->
        <h1>Your payment detail</h1><br>
        <form @submit.prevent="upload">
          <h4>Please select bank: </h4>
          <select v-model="selectedBank" id="bank" required>
              <option v-for="bank in bank" :key="bank.id" :value="bank">{{ bank.name }}</option>
          </select>
          <br><br>
          <h4>Last 4 digits of your account no.: </h4>
          <input class="bankno" type="text" v-model="bankno" maxlength="4" required>
          <br><br>
          <h4>Proceed date and time: </h4>
          <input class="datepicker" v-model="proceedDate" type="datetime-local" required>
          <h6>Note: Please pay within 1 hour and after submitting your payment, please wait for our confirming</h6>
          <center><button class="submit" type="submit" @click="upload">SUBMIT</button></center>
        </form>
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
  import NotToken from '../components/NotToken.vue';
  import axios from 'axios';
  export default {
    data() {
      return {
        roleName: '',
        name: '',
        selectedBank: null,
        proceedDate: '',
        bankno: '',
        bank: [
          {id: null, name: 'Please select bank:'},
          {id: 1, name: 'KTB - Krungthai Bank'},
          {id: 2, name: 'KBANK - Kasikorn Bank'},
          {id: 3, name: 'SCB - Siam Commercail Bank'},
          {id: 4, name: 'BBL - Bangkok Bank'},
          {id: 5, name: 'TTB - TTB Thanachart'},
          {id: 6, name: 'BAY - Krungsri Bank'},
          {id: 7, name: 'UOBT - United Overseas Bank Thai'},
          {id: 8, name: 'etc.'},
        ],
        isSubmitting: false,
      };
    },
    methods: {
      backverify () {
        this.$router.push('/history')
      },
      upload () {
        if(!this.isSubmitting && this.selectedBank && this.bankno && this.proceedDate){
          this.isSubmitting = true;
          this.bookingID = this.$route.query.bookingID;

          let bankName = '';

          switch (this.selectedBank.id) {
            case 1:
              bankName = 'KTB';
              break;
            case 2:
              bankName = 'KBANK';
              break;
            case 3:
              bankName = 'SCB';
              break;
            case 4:
              bankName = 'BBL';
              break;
            case 5:
              bankName = 'TTB';
              break;
            case 6:
              bankName = 'BAY';
              break;
            case 7:
              bankName = 'UOBT';
              break;
            default:
              bankName = '';
              break;
          }

          if (bankName) {
            axios.post('http://localhost:3000/uploadSlip', {
              bank: bankName,
              username: this.username,
              bankno: this.bankno,
              proceedDate: this.proceedDate,
              bookingID: this.bookingID
            })
            .then(response => {
              console.log('Data sent successfully:', response.data);
              const popup = document.getElementById('popup');
              popup.classList.add('open-popup')
            })
            .catch(error => {
              console.error('Error canceling booking:', error);
            })
            .finally(() => {
              this.isSubmitting = false;
            });
          } else {
            console.error('Invalid bank selected.');
            this.isSubmitting = false;
          }
        }
      },
      closePopup(){
        this.$router.push('/history')
      }
    },
    mixins: [NotToken],
  }
</script>
  
<style scoped>
body {
background-color: #DFE9F5;
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

n1 {
color: #013399;
font-size: 110%;
font-family: Verdana;
text-align: center;
padding-bottom: 5%;
}

h4 {
color: #000000;
font-size: 130%;
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
margin-bottom: 8%;
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
margin-bottom: 8%;
}

.skip {
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

.skip span {
cursor: pointer;
display: inline-block;
position: relative;
transition: 0.6s;
}

.skip span:after {
content:'\00bb';
position: absolute;
opacity: 0;
top: 0;
right: -5%;
transition: 0.6s;
}

.skip:hover span {
padding-right: 8%;
}

.skip:hover span:after {
opacity: 1;
right: 0;
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

.datepicker {
background-color: #ffffff;
border-color: #C5D4EB;
font-family: sans-serif;
padding-left: 2%;
padding-right: 1%;
font-size: 120%;
width: 40%;
height: 33px;
border: none;
border-radius: 10px;
margin-left: 2%;
}

select {
cursor: pointer;
font-family: Verdana;
width: 25%;
height: 50%;
color: #000000;
border-radius: 6px;
border-style: initial;
padding-left: 2%;
font-size: 120%;
background-color: #ffffff;
border-style: none;
margin-left: 5%;
}

.bankno {
font-family: Verdana;
width: 20%;
height: 28px;
color: #000000;
font-size: 120%;
background-color: #ffffff;
border-radius: 6px;
border-style: initial;
margin-left: 5%;
}

.container {
height:max-content;
width:100%;
margin: 0 auto;
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
