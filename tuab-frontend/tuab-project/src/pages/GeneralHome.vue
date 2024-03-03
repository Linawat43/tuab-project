<template lang="">
    <div class="container">
        <body>
            <div class="menubar">
                <br><br>
                <p Align=center><button class="menu" @click="booking"> BOOK NOW </button></p><br>
                <p Align=center><button class="menu"> CANCEL BOOKING </button></p><br>
                <p Align=center><button class="menu"> BOOKING HISTORY </button></p><br>
                <br><br><br><br>
                <p Align=center><LogoutBotton /></p>
            </div>

            <div class="content">
                <div class="namebar">
                    <h3>{{name}}</h3>
                </div>
                <br><br><br><br>
                <h1>Welcome to TU Archery Booking system</h1><br>
                <h4>1. to booking the Archery range click " BOOK NOW "</h4><br>
                <h4>2. to cancel your booking click " CANCEL BOOKING "</h4><br>
                <h4>3. to recheck your booking history click " BOOKING HISTORY "</h4><br>
                <br><br>
                <center><img src="archery.JPG" width=50% height=30%></center><br>
                <br><br>
                <h1>Location</h1>
                <br><br>
                <center><img src="TUABmap.jpeg" width=50% height=30%></center><br>
                <center>
                    <a href="https://maps.app.goo.gl/AHKZVHwujk3bU3dj7?g_st=ic"> Google map: TU Archery Range </a>
                    <br>
                    <label>Opening day: Monday - Thursday</label><br>
                    <label>Opening hours: 17.00 - 18.00 pm.</label>
                </center>
                <br><br><br>
                <h1>Line Official</h1><br>
                <center><img src="lineoa.jpg" width=27% height=27%>
                <br><br>
                <label>Operated by TU Archery club of Thammasat University</label>
                </center>
                <br><br><br><br>
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
        this.name = localStorage.getItem("username")
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
    padding-bottom: 103.5%;
    float: left;
}

.content {
    background-color: #DFE9F5;
    width: 75%;
    float: left;
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
    font-size: 85%;
    width: 100%;
    float: left;
    height: 55px;
}

h3 {
    color: #000000;
    font-size: 150%;
    font-family: Verdana;
    float: inline-start;
    padding-left: 5%;
    padding-top: 6px;
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
    padding: 0 15px;
  }
  .menubar {
    padding-bottom: 159.2%;
}
}
@media screen and (max-width: 500px) {
  .container {
    width: 100%;
    padding: 0 10px;
  }
  .menubar {
    padding-bottom: 241.5%;
}
}
</style>