<template lang="">
  <div class="container">
    <body>
      <div class="menubar">
        <div class="namebar">
            <h4>{{roleName}}: {{name}}</h4>
        </div>
        <br><br>
        <p Align=center><button class="backbtn" @click="backhome"><span> BACK </span></button></p><br>
      </div>

      <div class="content">
        <br><br><br>
        <h1>Edit Settings</h1><br>
        <h2>Please select start and end date to set an opening day</h2><br>

        <form @submit.prevent="submitForm" >
          <!-- Start Date -->
          <label>Start Date</label><br>
          <center>
          <input class="datepicker" type="date" v-model="startDate" :min="minDate" required>
          </center>
          <br><br>

          <!-- End Date -->
          <label>End Date</label><br>
          <center>
          <input class="datepicker" type="date" v-model="endDate" :min="startDate" required>
          <center><button class="submit" @click="submitForm">SAVE</button></center>
          </center>
        </form>
      </div>

      <!-- CompletePopUP  -->
      <div class="popup" id="completePopup">
        <img src="paychecked.png" width=30% height=30%><br>
        <h7>The operation has been saved</h7><br>
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
      isSubmitting: false,
      roleName: '',
      startDate: '',
      endDate:'',
      minDate: '',      // Minimum date
      name: '',
    };
  },
  methods: {
    backhome () {
      this.$router.push('/superStaff-home')
      localStorage.removeItem("opID");
    },
    fetchOperation() {
      axios.get('http://localhost:3000/checkoperation')
      .then(response => {
        if (response.data && response.data.length > 0) {
          const operationDay = response.data[0];
          const operationID = operationDay.operationID;
          localStorage.setItem("opID", operationID);
        } else {
          console.error('No data received or invalid response format.');
        }
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
    },
    submitForm() {
      if (this.startDate && this.endDate && !this.isSubmitting) {
        this.isSubmitting = true;
        const formData = {
          opID: localStorage.getItem("opID"),
          Nstart: this.startDate,
          Nend: this.endDate
        };
        axios.post('http://localhost:3000/editoperation', formData)
        .then((response) => {
          this.openPopup();
        })
        .catch((error) => {
          console.error('Error inserting operation into database:', error);
        })
        .finally(() => {
          this.isSubmitting = false;
        });
      }
    },
    openPopup(){
      const completePopup = document.getElementById('completePopup');
      completePopup.classList.add('open-popup')
    },
    closePopup(){
      const completePopup = document.getElementById('completePopup');
      completePopup.classList.remove('open-popup')
    }
  },
  mounted() {
    // Get today's date
    const today = new Date();

    // Set the minimum date to today
    this.minDate = today.toISOString().split('T')[0];
    this.fetchOperation();
  },
  mixins: [NotToken],
}
</script>

<style scoped>
body {
background-color: #DFE9F5;
width:100%;
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
padding-left: 15%;
}

h3 {
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

label {
font-size: 100%;
font-family: verdana;
color:#000000;
padding-left: 28%;
padding-bottom: 10%;
}

.submit {
color: #FFFFFF;
background-color: #3871c5;
font-family: Verdana;
font-size: 120%;
font-weight: bolder;
width: 20%;
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
width: 20%;
height: 50px;
border-radius: 10px;
cursor: pointer;
margin-top: 5%;
margin-bottom: 5%;
}

.namebar {
background-color: #F9D871;
width: 100%;
float: left;
}

h4 {
color: #000000;
font-size: 90%;
font-family: Verdana;
text-align: center;
padding-top: 2%;
padding-bottom: 2%;
text-transform: uppercase;
}

.datepicker {
background-color: #ffffff;
border-color: #C5D4EB;
font-family: sans-serif;
padding-left: 2%;
padding-right: 1%;
font-size: 120%;
width: 45%;
height: 40px;
border: none;
border-radius: 10px;
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