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
                <p Align=center><button class="staffmenu" @click="shiftSchedule"><span><img src="setting.png" width=9%> SHIFT SCHEDULE </span></button></p><br>
            </div>

            <div class="content">
                <br><br><br>
                <h1>Welcome to TU Archery Booking system</h1><br>
                <h4>You're logging-in in Staff mode...</h4><br>
            </div>
        </body>
    </div>
</template>

<script>
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
        };
    },
    mixins: [NotToken],
    // mounted() {
    //   const token = localStorage.getItem("token");
    //     if (token) {
    //       axios.get('http://localhost:3000/user-detail', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(response => {
    //         // Update the name property with user information retrieved from the server
    //         this.name = response.data.name; // Assuming the response data structure
    //     })
    //     .catch(error => {
    //         console.error('Error fetching user information:', error);
    //         // Handle error appropriately, such as displaying an error message
    //     });
    //     }
    // },
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
        }
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