<template lang="">
    <div class="container">
        <body>
            <div class="menubar">
                <br><br>
                <p Align=center><button class="menu" @click="backverify"> BACK </button></p><br>
            </div>

            <div class="content">
                <br><br><br>
                <h1>Payment Details</h1><br>
                <br>
                <center><img src="qrcode.jpg" width=30% height=30%></center>
                <h2>Amount 20 THB</h2>
                <h3>Noted: Please finish your payment within 10 minutes</h3>
                
                <form enctype="multipart/form-data">
                    <div class="imgupload">
                        <h4>Select image:</h4>
                        <input class="imgdata" type="file" id="img" name="img" accept="image/*">
                    </div>
                </form>
                <center><button class="submit" type="submit">SAVE</button></center>
            </div>
        </body>
    </div>
</template>
<script>
export default {
    methods: {
        backverify () {
            this.$router.push('/verify-info')
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
    padding-bottom: 57%;
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

h2 {
    color: #000000;
    font-size: 150%;
    font-family: Verdana;
    font-weight: bold;
    text-align: center;
}

h3 {
    color: #737373;
    font-size: 90%;
    font-family: Verdana;
    text-align: center;
    padding-bottom: 8%;
}

h4 {
    color: #000000;
    font-size: 150%;
    font-family: Verdana;
    float: left;
    margin-left: 15%;
}

.info {
    background-color:#C5D4EB;
    color: #000000;
    border-style: none;
    border-radius: 10px;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 120%;
    width: 50%;
    height: 40px;
    margin-left: 35%;
    padding-top: 0.5%;
    text-align: center;
}

input {
    background-color:#C5D4EB;
    color: #000000;
    border-style: none;
    border-radius: 10px;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 120%;
    width: 50%;
    height: 40px;
    text-align: center;
    margin-left: 10%;
}

.submit {
    color: #000000;
    background-color: #C5D4EB;
    border-color: #C5D4EB;
    font-family: Verdana;
    font-size: 120%;
    width: 25%;
    height: 50px;
    border-style: outset;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10%;
    margin-bottom: 10%;
}

.imgupload {
    background-color: #DFE9F5;
}

.imgdata {
    background-color: #DFE9F5;
    border-radius: 0%;
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