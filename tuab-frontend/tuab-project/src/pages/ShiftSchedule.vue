<template lang="">
  <div class="container">
    <body>
      <div class="menubar">
        <div class="namebar">
          <!-- Get Role and Name -->
          <h3>{{roleName}}: {{name}}</h3>
        </div>
        <br><br>
        <p Align=center><button class="backbtn" @click="backhome"><span> BACK </span></button></p><br>
      </div>

      <div class="content">
        <br><br><br>
        <h1>Manage Timesheet</h1><br>
        <h2>Please select date first. Then, check/uncheck desired time shifts</h2><br><br>
      
        <!-- Date select -->
        <form align="center">
          <input class="datepicker" type="date" v-model="selectedDate" :min="minDate" :max="maxDate">
        </form>
        <br><br>

        <!-- Shift select -->
        <div class="shiftbox" align="center">
          <input class="box" type="checkbox" id="shift1" name="shift1" value="1" v-model="selectedShifts">
          <label for="shift1">17.00 - 17.30</label><br>
          <input class="box" type="checkbox" id="shift2" name="shift2" value="2" v-model="selectedShifts">
          <label for="shift2">17.30 - 18.00</label><br>
        </div>

        <!-- SAVE button -->
        <center><button class="submit" @click="saveSchedule">SAVE</button></center>
      </div>

      <!-- Accepted PopUP -->
      <div class="popup" id="acceptpopup">
        <img src="paychecked.png" width="30%" height="30%"><br>
        <h7>Shift Operation saved!</h7><br>
        <button @click="closePopup">HOME</button>
      </div>

      <!-- Date Warning PopUP -->
      <div class="popup" id="datewarnpopup">
        <img src="warning.png" width="30%" height="30%"><br>
        <h7>Please specify working date before click "SAVE"</h7><br>
        <button @click="closeDPopup">BACK</button>
      </div>

      <!-- Empty Shift PopUP -->
      <div class="popup" id="emptypopup">
        <a @click="closeEPopup">X</a>
        <img src="warning.png" width=30% height=30%><br>
        <h7>NO any shift was selected</h7><br>
        <h8>Click "SUBMIT" to save your shift as No-working day</h8><br>
        <button type="submit" @click="closePopup">SUBMIT</button>
      </div> 
    </body>
  </div>
</template>

<script>
import axios from 'axios';
import NotToken from '../components/NotToken.vue';
export default {
  data() {
    return {
      roleName: '',
      selectedDate: '', // Selected date
      minDate: '',      // Minimum date
      name: '',
      username: '',
      selectedShifts: [],
      maxDate: ''
    };
  },
  methods: {
    backhome () {
      if(this.roles == '2'){
        this.$router.push('/superStaff-home')
      }
      else if(this.roles == '3'){
        this.$router.push('/staff-home')
      }
    },
    openPopup(){
      document.getElementById('acceptpopup').classList.add('open-popup');
    },
    closePopup(){
      if(this.roles == '2'){
        this.$router.push('/superStaff-home')
      }
      else if(this.roles == '3'){
        this.$router.push('/staff-home')
      }
    },
    closeDPopup(){
      document.getElementById('datewarnpopup').classList.remove('open-popup');
    },
    closeEPopup(){
      document.getElementById('emptypopup').classList.remove('open-popup');
    },
    saveSchedule() {
      if (!this.selectedDate) {
        document.getElementById('datewarnpopup').classList.add('open-popup');
        return;
      }
      const formUD = {
        username: this.username,
        workDate: this.selectedDate
      }
      
      axios.get(`http://localhost:3000/checkWork`, { params: formUD })
      .then(response => {
        const userSchedules = response.data;

        if (userSchedules.length > 0) {
          alert("The date has already been selected.")
        } else {
          if (this.selectedShifts.length === 0) {
            document.getElementById('emptypopup').classList.add('open-popup');
            return;
          }

          const formData = {
            username: this.username,
            workDate: this.selectedDate,
            workShift: this.calculateWorkShift()
          };

          axios.post('http://localhost:3000/workSchedule', formData)
          .then(response => {
            console.log('Shift schedule saved successfully!');
            this.openPopup();
          })
          .catch(error => {
            console.error('Error saving shift schedule:', error);
          });
        }
      })
      .catch(error => {
        console.error('Error fetching user schedules:', error);
      });
    },
    calculateWorkShift() {
      const shift1Selected = this.selectedShifts.includes('1');
      const shift2Selected = this.selectedShifts.includes('2');

      if (shift1Selected && shift2Selected) {
        return '3';
      } else if (shift1Selected) {
        return '1';
      } else if (shift2Selected) {
        return '2';
      } else {
        return '';
      }
    }
  },
  mounted() {      
    // Get today's date
    const today = new Date();

    // Set the minimum date to today
    this.minDate = today.toISOString().split('T')[0];

    // this.fetchOperation();

    this.maxDate = localStorage.getItem("endDate")

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

.shiftbox input{
cursor: pointer;
}

.shiftbox label{
color: #000000;
font-size: 130%;
font-family: Verdana; 
padding-left: 2%;
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

.popup a{
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