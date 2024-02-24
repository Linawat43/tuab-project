<template lang="">
    <div class="container">
        <body>
            <div class="menubar">
                <br><br>
                <p Align=center><button class="menu" @click="logout">LOGOUT</button>
                <br><br><br><br>
                <p Align=center><button class="menu" @click="book"> BOOK NOW </button></p><br>
                <p Align=center><button class="menu"> CANCEL BOOKING </button></p><br>
                <p Align=center><button class="menu"> BOOKING HISTORY </button></p><br>
                <p Align=center><button class="menu"> SHIFT SCHEDULE </button></p><br>
            </div>

            <div class="content">
                <div class="namebar">
                    <name>Staff's name</name>
                </div>
                <br><br><br><br>
                <h1>Welcome to TU Archery Booking system</h1><br>
                <wnote>You're logging-in in Staff mode...</wnote><br>
            </div>
        </body>
    </div>
</template>
<script>
export default {
    methods: {
        logout() {
            this.$router.push('/');
        }

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
    padding-bottom: 100%;
    float: left;
}

.content {
    background-color: #DFE9F5;
    width: 75%;
    float: left;
}
.menu {
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
    width: 100%;
    float: left;
    height: 55px;
}

name {
    color: #000000;
    font-size: 150%;
    font-family: Verdana;
    float: inline-start;
    padding-left: 5%;
    padding-top: 6px;
}

wnote {
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