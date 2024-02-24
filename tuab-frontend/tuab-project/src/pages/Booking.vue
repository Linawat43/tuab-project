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
                <wnote>date picker...</wnote><br>
                <br><br><br><br><br><br><br><br><br><br>
                <h1>Lane 1</h1><br><br><br><br>
                <h1>Lane 2</h1><br><br><br><br>
                <h1>Lane 3</h1><br><br><br><br>
                <h1>Lane 4</h1><br><br><br><br>
                <h1>Lane 5</h1><br><br><br><br>
                <h1>Lane 6</h1><br><br><br><br>
                <br><br><br><br>
                <img class="colorstatus" src="status.jpeg" width=17% height=17%>

                <br><br><br><br><br>
            </div>
        </body>
    </div>
</template>
<script>
export default {
    methods: {
        backhome () {
            this.$router.push('/general-home')
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

label {
    color: #000000;
    font-size: 135%;
    font-family: sans-serif;
    padding-top: 30px;
}

wnote {
    color: #000000;
    font-family: Verdana;
    padding-left: 15%;
    font-size: 130%;
}

.colorstatus {
    float: right;
    margin-right: 8%;
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