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
              <h1>Select Date</h1><br>
              <form @submit.prevent="submitForm">
              <p Align="center">
                  <input class="datepicker" type="date" v-model="selectedDate" :min="minDate" :max="maxDate">
                  <button class="select" type="submit">Select</button>
                  <center><h4>*Please book in a current day or 1 day in advance</h4></center><br>
              </p>
              </form>
              <br>
              <center><img src="status.jpg" width=35% height=10%></center>
              <br><br>
              <!-- <h5 v-if="status=='false'">Lane 1</h5><button v-if="status=='true'" disabled @click="selectLane()"><span> 17.00 </span></button><button class="redround" @click="selectLane('L1R2')"><span> 17.30 </span></button><br><br><br> -->
              <!-- <h5>Lane 1</h5><button class="blueround" @click="selectLane()"><span> 17.00 </span></button><button class="blueround" @click="selectLane()"><span> 17.30 </span></button><br><br><br>
              <h5>Lane 2</h5><button class="blueround" @click="selectLane()"><span> 17.00 </span></button><button class="blueround" @click="selectLane()"><span> 17.30 </span></button><br><br><br>
              <h5>Lane 3</h5><button class="blueround" @click="selectLane()"><span> 17.00 </span></button><button class="blueround" @click="selectLane()"><span> 17.30 </span></button><br><br><br>
              <h5>Lane 4</h5><button class="blueround" @click="selectLane()"><span> 17.00 </span></button><button class="blueround" @click="selectLane()"><span> 17.30 </span></button><br><br><br>
              <h5>Lane 5</h5><button class="blueround" @click="selectLane()"><span> 17.00 </span></button><button class="blueround" @click="selectLane()"><span> 17.30 </span></button><br><br><br>
              <h5>Lane 6</h5><button class="blueround" @click="selectLane()"><span> 17.00 </span></button><button class="blueround" @click="selectLane()"><span> 17.30 </span></button> -->
              <div class="lane-container">
                <h5>Lane 1</h5>
                <button class="blueround" @click="selectLane" data-lane-id="101" data-shift-id="1"><span>17:00</span></button>
                <button class="blueround" @click="selectLane" data-lane-id="101" data-shift-id="2"><span>17:30</span></button>
              </div>
              <div class="lane-container">
                <h5>Lane 2</h5>
                <button class="blueround" @click="selectLane" data-lane-id="102" data-shift-id="1"><span>17:00</span></button>
                <button class="blueround" @click="selectLane" data-lane-id="102" data-shift-id="2"><span>17:30</span></button>
              </div>
              <div class="lane-container">
                <h5>Lane 3</h5>
                <button class="blueround" @click="selectLane" data-lane-id="103" data-shift-id="1"><span>17:00</span></button>
                <button class="blueround" @click="selectLane" data-lane-id="103" data-shift-id="2"><span>17:30</span></button>
              </div>
              <div class="lane-container">
                <h5>Lane 4</h5>
                <button class="blueround" @click="selectLane" data-lane-id="104" data-shift-id="1"><span>17:00</span></button>
                <button class="blueround" @click="selectLane" data-lane-id="104" data-shift-id="2"><span>17:30</span></button>
              </div>
              <div class="lane-container">
                <h5>Lane 5</h5>
                <button class="blueround" @click="selectLane" data-lane-id="105" data-shift-id="1"><span>17:00</span></button>
                <button class="blueround" @click="selectLane" data-lane-id="105" data-shift-id="2"><span>17:30</span></button>
              </div>
              <div class="lane-container">
                <h5>Lane 6</h5>
                <button class="blueround" @click="selectLane" data-lane-id="106" data-shift-id="1"><span>17:00</span></button>
                <button class="blueround" @click="selectLane" data-lane-id="106" data-shift-id="2"><span>17:30</span></button>
              </div>
              <br><br><br><br><br><br>

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
            status: 'true',
            roleName: '',
            roles: '',
            date: '2018-03-02', // YYYY-MM-DD
            selectedLane: '',
            name: '',
            selectedDate: '', // Selected date
            minDate: '',      // Minimum date
            maxDate: ''       // Maximum date
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
      selectLane(event) {
        const laneId = event.target.getAttribute('data-lane-id');
        const shiftId = event.target.getAttribute('data-shift-id');

        const dataToSend = {
          date: this.selectedDate,
          lane: laneId,
          username: this.username,
          shift: shiftId
        }
        this.$router.push('/verifyInfo');
        // this.$router.push({path: '/verifyInfo', query: dataToSend,});
        // try {
        //   const formattedDate = this.selectedDate.toISOString().split('T')[0];
        //   const data = {
        //       date: formattedDate,
        //       lane: selectedLane,
        //       // username: this.username
        //   };
        //   sessionStorage.setItem("selectedData", JSON.stringify(data));
        //   this.$router.push('/verifyInfo');
        //   } catch (error) {
        //       console.error('Error selecting lane:', error);
        //   }
      },
      async submitForm() {
      try {
        const dayOffUrl = 'http://localhost:3000/checkdayoff';
        const dayOffResponse = await axios.get(dayOffUrl, {
          params: {
            workDate: this.selectedDate
          }
        });

        if (dayOffResponse.data.length === 0) {
          const laneButtons = document.querySelectorAll('.blueround, .redround');
          laneButtons.forEach(button => {
            button.className = 'greyround';
            button.disabled = true;
          });
        } else {
          const bookingCheckUrl = 'http://localhost:3000/bookingCheck';
          const bookingCheckResponse = await axios.get(bookingCheckUrl, {
            params: {
              workDate: this.selectedDate
            }
          });
          const laneAvailabilityData = bookingCheckResponse.data;
          const laneButtons = document.querySelectorAll('.blueround, .redround');
          
          laneButtons.forEach(button => {
            const laneId = button.getAttribute('data-lane-id');
            const shiftId = button.getAttribute('data-shift-id');

            const isLaneShiftAvailable = laneAvailabilityData.some(item => {
              return item.lane === parseInt(laneId) && item.shift === parseInt(shiftId);
            });

            if (isLaneShiftAvailable) {
              button.className = 'blueround';
            } else {
              button.className = 'redround';
            }
            
            button.disabled = false;
          });
        }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    },
    mounted() {
      // // Set initial button styles to greyround
      // const laneButtons = document.querySelectorAll('.blueround, .redround');
      // laneButtons.forEach(button => {
      //   button.className = 'greyround';
      //   button.disabled = true;
      // });

      // Get today's date
      const today = new Date();

      // Set the minimum date to today
      this.minDate = today.toISOString().split('T')[0];

      // Get tomorrow's date
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);

      // Set the maximum date to tomorrow
      this.maxDate = tomorrow.toISOString().split('T')[0];
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
    height: 100%;
    overflow-y: auto;
    /* padding-bottom: 58.5%; */
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

h1 {
    color: #000000;
    font-size: 200%;
    font-weight: bold;
    font-family: Verdana;
    padding-left: 10%;
}

h5 {
    color: #000000;
    font-size: 150%;
    font-weight: bold;
    font-family: Verdana;
    float: left;
    margin-left: 22%;
}

h4 {
    color: #000000;
    font-family: Verdana;
    font-size: 100%;
    padding-top: 1%;
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

/* Closed round */
.greyround {
    color: #b1afaf;
    background-color: #D9D9D9;
    border-radius: 10px;
    font-family: Verdana;
    font-size: 110%;
    width: 18%;
    height: 45px;
    margin-left: 5%;
}

/* Booked round */
.redround {
    color: #f76a76;
    background-color: #FF9DA5;
    border-radius: 10px;
    font-family: Verdana;
    font-size: 110%;
    width: 18%;
    height: 45px;
    margin-left: 5%;
}

/* Available round */
.blueround {
    color: #FFFFFF;
    background-color: #3871C5;
    border-radius: 10px;
    font-family: Verdana;
    font-size: 110%;
    width: 18%;
    height: 45px;
    cursor: pointer;
    margin-left: 5%;
    transition: all 0.5s;
}

.blueround span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.6s;
}

.blueround span:after {
  content:'>';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -5%;
  transition: 0.6s;
}

.blueround:hover span {
  padding-right: 9%;
}

.blueround:hover span:after {
  opacity: 1;
  right: 0;
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