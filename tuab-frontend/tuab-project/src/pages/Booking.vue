<template lang="">
    <div class="container">
        <body>
            <div class="menubar">
                <br><br>
                <p Align=center><button class="menu" @click="backhome"> BACK </button></p><br>
            </div>

            <div class="content">
                <br><br><br>
                <h1>Select Date</h1><br>
                <h4>*Please book in a current day or 1 day in advance</h4><br>
                <form action="/action_page.php">
                <p Align="center">
                    <input class="datepicker" type="date" id="bookdate" name="bookdate">
                    <button class="select" type="submit">Select</button>
                </p>
                </form>
                <br><br><br><br><br>
                <h5>Lane 1</h5><button class="round"> 17.00 </button><button class="round"> 17.30 </button><br><br><br>
                <h5>Lane 2</h5><button class="round"> 17.00 </button><button class="round"> 17.30 </button><br><br><br>
                <h5>Lane 3</h5><button class="round"> 17.00 </button><button class="round"> 17.30 </button><br><br><br>
                <h5>Lane 4</h5><button class="round"> 17.00 </button><button class="round"> 17.30 </button><br><br><br>
                <h5>Lane 5</h5><button class="round"> 17.00 </button><button class="round"> 17.30 </button><br><br><br>
                <h5>Lane 6</h5><button class="round"> 17.00 </button><button class="round"> 17.30 </button>

                <img class="colorstatus" src="status.jpeg" width=17% height=17%>

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
        allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    },
    mounted() {
        this.roles = localStorage.getItem("role")
    }
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
    padding-bottom: 79.33%;
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

.select {
    color: #000000;
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 100%;
    width: 10%;
    height: 40px;
    border-style: outset;
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
    padding-left: 15%;
    font-size: 130%;
}

.round {
    color: #000000;
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 110%;
    font-weight: bold;
    width: 18%;
    height: 45px;
    border-style: outset;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 5%;
}

.colorstatus {
    float: right;
    margin-right: 8%;
    padding-top: 10%;
    padding-bottom: 10%;
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