<template lang="">
    <div class="container">
        <body>
            <div class="menubar">
                <br><br>
                <p Align=center><button class="backbtn" @click="backhome"><span> BACK </span></button></p><br>
            </div>

            <div class="content">
                <br><br><br>
                <h1>Select Date</h1><br>
                <form>
                <p Align="center">
                    <input class="datepicker" type="date" id="bookdate" name="bookdate" lang="en">
                    <button class="select" type="submit">Select</button>
                    <center><h4>*Please book in a current day or 1 day in advance</h4></center><br>
                </p>
                </form>
                <br>
                <center><img src="status.jpg" width=35% height=10%></center>
                <br><br>
                <h5>Lane 1</h5><button class="round"><span> 17.00 </span></button><button class="round"><span> 17.30 </span></button><br><br><br>
                <h5>Lane 2</h5><button class="round"><span> 17.00 </span></button><button class="round"><span> 17.30 </span></button><br><br><br>
                <h5>Lane 3</h5><button class="round"><span> 17.00 </span></button><button class="round"><span> 17.30 </span></button><br><br><br>
                <h5>Lane 4</h5><button class="round"><span> 17.00 </span></button><button class="round"><span> 17.30 </span></button><br><br><br>
                <h5>Lane 5</h5><button class="round"><span> 17.00 </span></button><button class="round"><span> 17.30 </span></button><br><br><br>
                <h5>Lane 6</h5><button class="round"><span> 17.00 </span></button><button class="round"><span> 17.30 </span></button>
                <br><br><br><br><br><br>

            </div>
        </body>
    </div>
</template>

<script>
export default {
    data() {
        return {
            roles: '',
            date: '2018-03-02',
            selectedLane: '',
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
        // allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
        async selectLane() {
            try {
                const data = {
                    date: this.date,
                    lane: this.selectedLane,
                    // username: this.username
                };

                const response = await axios.post('http://localhost:3000/booking', data);

                console.log(response.data);
            } catch (error) {
                console.error('Error selecting lane:', error);
            }
        }
    },
    mounted() {
      // this.username = sessionStorage.getItem("username")
      this.roles = sessionStorage.getItem("role")
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
    width: 40%;
    height: 40px;
    border: none;
    border-radius: 10px;
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
.round {
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

.round span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.6s;
}

.round span:after {
  content:'>';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -5%;
  transition: 0.6s;
}

.round:hover span {
  padding-right: 9%;
}

.round:hover span:after {
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