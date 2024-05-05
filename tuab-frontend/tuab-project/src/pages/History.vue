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
              <h1>Booking History</h1><br>
              <center><img src="bstatus.png" width=39% height=15%></center>
              <br><br>
              <!-- <div class="slot">
                <h2>DD/MM/YYYY</h2><s1>Lane 1</s1><s1>17.00</s1><button class="addbtn" @click="addslip"><span>UPLOAD SLIP</span></button>
                <img src="paychecked.png" width=4% height=4%>
              </div>
              <div class="slot">
                <h2>DD/MM/YYYY</h2><s1>Lane 1</s1><s1>17.30</s1><button class="addbtn" @click="addslip"><span>UPLOAD SLIP</span></button>
                <img src="paypending.png" width=4% height=4%>
              </div> -->
              <div v-for="(booking, index) in bookings" :key="index" class="slot">
              <h2>{{ booking.bookingDate }}</h2>
              <s1>Lane {{ booking.targetLaneID }}</s1>
              <s1>{{ booking.shiftID }}</s1>
              <button class="addbtn" @click="addslip"><span>UPLOAD SLIP</span></button>

              <img v-if="booking.bookingStatusID === 2 || booking.bookingStatusID === 4" src="paychecked.png" width="4%" height="4%">
              <img v-else-if="booking.bookingStatusID === 1" src="paypending.png" width="4%" height="4%">
              <img v-else-if="booking.bookingStatusID === 3" src="cancel.png" width="4%" height="4%">
            </div>
                <br><br>
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
          bookings: []
        };
    },
    mixins: [NotToken],
    mounted() {
      this.username = localStorage.getItem("username");
      console.log('Username:',this.username);
      this.fetchBookings();
    },
    methods: {
      fetchBookings() {
        axios.get('http://localhost:3000/bookingHistory', {params: {username: this.username}})
            .then(response => {
                this.bookings = response.data;
            })
            .catch(error => {
                console.error('Error fetching bookings:', error);
            });
      },
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

        addslip () {
          this.$router.replace("add-payment")
        }
    },
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
  padding-bottom: 2%;
  padding-right: 5%;
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
    width: 17%;
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

.addbtn {
  border-radius: 10px;
  background-color: #3871c5;
  font-family: sans-serif;
  color: #FFFFFF;
  text-align: center;
  font-size: 100%;
  width: 15%;
  height: 40px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.addbtn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.6s;
}

.addbtn span:after {
  content:'+';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -5%;
  transition: 0.6s;
}

.addbtn:hover span {
  padding-right: 8%;
}

.addbtn:hover span:after {
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
