<template lang="">
  <div class="container">
      <body>
          <div class="menubar">
              <div class="namebar">
                  <h3>{{roleName}}: {{name}}</h3>
              </div>
              <br><br>
              <p Align=center><LogoutBotton /></p>
              <br><br>
              <p Align=center><button class="menu" @click="booking"><span> BOOK NOW </span></button></p><br>
              <p Align=center><button class="menu" @click="cancel"><span> CANCEL BOOKING </span></button></p><br>
              <p Align=center><button class="menu" @click="history"><span> BOOKING HISTORY </span></button></p><br>
              <p Align=center><button class="staffmenu" @click="shiftSchedule"><span><img src="setting.png" width=9%> Manage Timesheet </span></button></p><br>
          </div>

          <div class="content">
              <br><br><br>
              <h1>Welcome to TU Archery Booking system</h1><br>
              <h4>You're logging-in in Staff mode, Please select date to approve the bookings</h4><br>
              <form @submit.prevent="submitForm">
              <p Align="center">
                <input class="datepicker" type="date" v-model="selectedDate" :min="minDate" :max="maxDate">
                <button class="select" type="submit">Select</button>
              </p>
              </form>
              <br><br>

              <!-- Bookings Slot -->
              <div v-for="(booking, index) in bookings" :key="index" class="slot">
              <template v-if="booking.bookingStatusID !== 3">
                <h2>{{ booking.username }}</h2>
                <t1>(Tel.{{booking.telNumber}})</t1>
                <h5>{{ booking.shiftID }}</h5>
                <h5>Lane {{ booking.targetLaneID }}</h5>
                <button class="slipbtn" @click="showSlip(booking)">Payment</button>
                <select v-model="selectedStatus[index]" class="status-select" id="status">
                  <option v-if="!selectedStatus[index]" :value="null" disabled selected>Please select one:</option>
                  <option v-for="status in status" :key="status.id" :value="status.id">{{ status.name }}</option>
                </select>
                <br>
              </template>
            </div>
            <center><button class="submit" type="submit" @click="updateStatus">UPDATE</button></center>
          </div>

          <!-- Slip PopUp -->
          <div class="popup" id="popup">
              <a class="close" @click="closePopup">X</a>
              <br><br>
              <p1>Payment Detail</p1>
              <br><br>
              <p2>Bank:  {{ bankName }}</p2><br>
              <p2>Last 4 digits of account no.: {{ accountDigit }}</p2><br>
              <p2>Proceed date and time: {{ dateATime }}</p2>
          </div>
      </body>
  </div>
</template>

<script>
import axios from 'axios';
import LogoutBotton from '../components/LogoutBotton.vue';
import NotToken from '../components/NotToken.vue';
export default {
  components:{
    LogoutBotton
  },
  data() {
    return {
      roleName: '',
      name: '',
      date: '2018-03-02', // YYYY-MM-DD
      selectedLane: '',
      selectedDate: '', // Selected date
      minDate: '',      // Minimum date
      maxDate: '',       // Maximum date
      status: [
        {id: 1, name: 'Pending'},
        {id: 2, name: 'Confirm'},
        {id: 3, name: 'Cancel'},
      ],
      bookings: [],
      tel: '',
      bankName: '',
      accountDigit: '',
      dateATime: '',
      selectedStatus: []
    };
  },
  mixins: [NotToken],
  methods: {
    booking() {
      this.$router.replace("booking");
    },
    history() {
      this.$router.replace("history");
    },
    cancel() {
      this.$router.replace("cancel");
    },
    shiftSchedule() {
      this.$router.replace("shift-schedule");
    },
    openPopup(){
      popup.classList.add('open-popup')
    },
    closePopup(){
      popup.classList.remove('open-popup')
    },
    showSlip(booking) {
      const { username, bookingID } = booking;
      console.log(bookingID);
      axios.get('http://localhost:3000/checkSlip', { params: { username, bookId: bookingID } })
      .then(response => {
        this.bankName = response.data[0].bankName
        this.accountDigit = response.data[0].accountDigit
        this.dateATime = response.data[0].dateATime
        this.openPopup()
      })
      .catch(error => {
        console.error('Error fetching payment details:', error);
      });
    },
    submitForm() {
      axios.get('http://localhost:3000/checkBookStaff', { params: { date: this.selectedDate } })
        .then(response => {
          this.bookings = response.data;
          this.selectedStatus = new Array(this.bookings.length).fill(null);
          this.bookings.forEach((booking, index) => {
            if (booking.bookingStatusID === 2) {
              this.selectedStatus[index] = 2;
            }
          });
        })
        .catch(error => {
          console.error('Error fetching bookings:', error);
        });
    },
    fetchOperation() {
      axios.get('http://localhost:3000/checkoperation')
          .then(response => {
            if (response.data && response.data.length > 0) {
              const operationDay = response.data[0];
              const endDate = operationDay.endDate;
              localStorage.setItem("endDate", endDate);
            } else {
              console.error('No data received or invalid response format.');
            }
          })
          .catch(error => {
              console.error('Error fetching bookings:', error);
          });
    },
    updateStatus() {
      if (this.selectedStatus.some(status => status === null)) {
        alert('Please select a status for each booking');
        return;
      }
      this.bookings.forEach((booking, index) => {
        if (booking.bookingStatusID !== 3) {
          const selectedStatus = this.selectedStatus[index];
          const { bookingID } = booking;
          axios.post('http://localhost:3000/staffApprove', { bookId: bookingID, status: selectedStatus })
            .then(response => {
              console.log(`Status updated for bookingID ${bookingID}: ${response.data.message}`);
            })
            .catch(error => {
              console.error(`Error updating status for bookingID ${bookingID}:`, error);
            });
        }
      });
    }
  },
  mounted() {
        // Get today's date
    const today = new Date();

    // Set the minimum date to today
    this.minDate = today.toISOString().split('T')[0];

    // Get tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    // Set the maximum date to tomorrow
    this.maxDate = tomorrow.toISOString().split('T')[0];
    this.fetchOperation();
  }
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
  padding-bottom: 11%;
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

.menu {
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

.menu span {
cursor: pointer;
display: inline-block;
position: relative;
transition: 0.6s;
}

.menu span:after {
content:'>';
position: absolute;
opacity: 0;
top: 0;
right: -5%;
transition: 0.6s;
}

.menu:hover span {
padding-right: 8%;
}

.menu:hover span:after {
opacity: 1;
right: 0;
}

/* Staff menu */
.staffmenu {
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
}

.staffmenu span {
cursor: pointer;
display: inline-block;
position: relative;
transition: 0.6s;
}

.staffmenu span:after {
content:'>';
position:initial;
opacity: 0;
top: 0;
right: -5%;
transition: 0.6s;
}

.staffmenu:hover span {
padding-right: 8%;
}

.staffmenu:hover span:after {
opacity: 1;
right: 0;
}

h1 {
  color: #000000;
  font-size: 200%;
  font-weight: bold;
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

label {
  color: #000000;
  font-size: 135%;
  font-family: sans-serif;
  padding-top: 30px;
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

h4 {
  color: #000000;
  font-family: Verdana;
  padding-left: 15%;
  font-size: 130%;
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

.slipbtn {
  color: #FFFFFF;
  background-color: #94b9ef;
  border-color: #94b9ef;
  font-family: Verdana;
  font-size: 120%;
  border-radius: 10px;
  cursor: pointer;
  margin: auto;
  padding: auto;
  width: 18%;
  height: 40px;
  text-align: center;
}

.slipbtn:hover {
  color: #94b9ef;
  width: 18%;
  background-color: #FFFFFF;
  border-color: #94b9ef;
  border: 2px solid;
  font-family: Verdana;
  border-radius: 10px;
  cursor: pointer;
}

.slot {
  background-color: #DFE9F5;
  display: flex;
  flex-direction: row;
  column-gap: 2%;
  margin-bottom: 20px;
}

h2 {
    color: #000000;
    font-size: 130%;
    font-family: Verdana;
    float: left;
    margin-left: 7%;
}

t1 {
    color: #000000;
    font-size: 100%;
    font-family: Verdana;
    float: left;
    padding-top: 0.5%;
}

h5 {
    background-color:#C5D4EB;
    color: #000000;
    font-size: 120%;
    font-family: Verdana;
    border-radius: 10px;
    border-style: none;
    margin: auto;
    padding: auto;
    width: 18%;
    height: 40px;
    padding-top: 0.5%;
    text-align: center;
}

p1 {
  font-size: 150%;
  background-color: #FFFFFF;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 2%;
  padding-bottom: 2%;
  border-radius: 8px;
  color: #000000;
  font-weight: bold;
  margin-top: 10%;
}

p2 {
  padding-top: 5%;
  font-size: 150%;
  color: #000000;
}

/* selection */
select {
  cursor: pointer;
  font-family: Verdana;
  width: 33%;
  color: #000000;
  border-radius: 10px;
  padding-left: 2%;
  font-size: 100%;
  background-color: #ffffff;
  border-style: initial;
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
    margin-top: 10%;
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
}

.select {
    color: #FFFFFF;
    background-color: #94b9ef;
    border-color: #94b9ef;
    font-family: Verdana;
    font-size: 100%;
    width: 10%;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 2%;
    font-weight: bold;
}

.select:hover {
    color: #94b9ef;
    background-color: #FFFFFF;
    border-color: #94b9ef;
    border: 2px solid;
    font-family: Verdana;
    font-weight: bold;
    font-size: 100%;
    width: 10%;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 2%;
}

/* PopUp */
.popup{
    width: 40%;
    height: 40%;
    background: #c2dbf0;
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