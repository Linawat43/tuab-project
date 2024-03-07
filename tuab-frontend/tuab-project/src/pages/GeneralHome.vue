<template lang="">
    <div class="container">
        <body>
            <div class="menubar">
                <div class="namebar">
                    <h3>General User: {{name}}</h3>
                </div>
                <br><br><br>
                <p Align=center><LogoutBotton /></p>
                <br><br>
                <p Align=center><button class="menu" @click="booking"><span> BOOK NOW </span></button></p><br>
                <p Align=center><button class="menu"><span> CANCEL BOOKING </span></button></p><br>
                <p Align=center><button class="menu"><span> BOOKING HISTORY </span></button></p><br>
            </div>

            <div class="content">
                <br><br><br>
                <h1>Welcome to TU Archery Booking system</h1><br>
                <h4>1. to booking the Archery range click " BOOK NOW "</h4><br>
                <h4>2. to cancel your booking click " CANCEL BOOKING "</h4><br>
                <h4>3. to recheck your booking history click " BOOKING HISTORY "</h4><br>
                <br>
                <center><img src="archery.JPG" width=50% height=30%></center><br>
                <br>
                <h1>Location</h1>
                <br>
                <center><img src="TUABmap.jpeg" width=50% height=30%></center><br>
                <center>
                    <a href="https://maps.app.goo.gl/AHKZVHwujk3bU3dj7?g_st=ic"> Google map: TU Archery Range </a>
                    <br>
                    <label>Opening day: Monday - Thursday</label><br>
                    <label>Opening hours: 17.00 - 18.00 pm.</label>
                </center>
                <br><br>
                <h1>Line Official</h1><br>
                <center><img src="lineoa.jpg" width=27% height=27%>
                <br><br>
                <label>Operated by TU Archery club of Thammasat University</label>
                </center>
                <br><br>
            </div>
        </body>
    </div>
</template>
<script>
import LogoutBotton from '../components/LogoutBotton.vue';
export default {
    components:{
        LogoutBotton
    },
    data() {
        return {
            name: '',
        };
    },
    methods: {
        booking() {
            this.$router.replace("booking");
        }
    },
    mounted() {
        this.name = sessionStorage.getItem("name")
    },
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
    padding-bottom: 90%;
    float: left;
}

.content {
    background-color: #DFE9F5;
    width: 75%;
    float: left;
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