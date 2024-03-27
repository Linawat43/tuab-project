<template lang="">
    <div class="container">
        <body>
            <div class="menubar">
                <br><br>
                <p Align=center><button class="backbtn" @click="backhome"><span> BACK </span></button></p><br>
            </div>

            <div class="content">
              <br><br><br>
              <h1>Operation Editor</h1><br>
              <form @submit.prevent="submitForm">
              <p Align="center">
                  <input class="datepicker" type="date" v-model="selectedDate" :min="minDate" >
                  <button class="select" type="submit">Select</button>
              </p>
              </form>

          </div>
      </body>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selectedDate: '', // Selected date
            minDate: '',      // Minimum date
        };
    },

    methods: {
        backhome () {
          this.$router.push('/superStaff-home')
        }
    },

    mounted() {
      // this.username = sessionStorage.getItem("username")
      this.roles = sessionStorage.getItem("role")
      
      // Get today's date
      const today = new Date();

      // Set the minimum date to today
      this.minDate = today.toISOString().split('T')[0];
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
    float: left;
    margin-left: 15%;
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
    /* daysOfWeekHighlighted: "0,5,6"; */
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