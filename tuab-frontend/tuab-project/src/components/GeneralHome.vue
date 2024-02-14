<template lang="">
    <div>
        <body>
            <br><br><br>
            <p Align=center><button> BOOK NOW </button></p><br>
            <p Align=center><button> CANCEL BOOKING </button></p><br>
            <p Align=center><button> BOOKING HISTORY </button></p><br>
            <br><br><br><br>
            <h2>Location</h2>
            <center><img src="TUABmap.jpeg" width=850px height=500px></center>
            <br>
            <center>
                <a href="https://maps.app.goo.gl/AHKZVHwujk3bU3dj7?g_st=ic">Google map: TU Archery Range</a>
                <br>
                <label>Opening day: Monday - Thursday</label><br>
                <label>Opening hours: 17.00 - 18.00 pm.</label>
            </center>
            <br><br><br>
            <h2>Line Official</h2><br>
            <center><img src="lineoa.jpg" width=300px height=300px></center>
            <br><br><br><br>
            <p Align=right><button @click="logout"> LOGOUT </button></p><br>
            <br><br><br><br>
            <div>
                <br><br>
                <info>TU Archery club information</info><br>
                <info>Facebook Page: TU Archery Club</info><br>
                <info>Instagram: @tuarcheryclub</info><br>
                <info>Monday - Thursday</info><br>
                <info>17.00 - 18.00 pm.</info><br><br><br>
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

    label {
        color: #000000;
        font-size: 20px;
        font-family: Verdana;
        padding-top: 30px;
    }

    div {
        height:max-content;
        width:100%;
        background-color: #275496;
        }

    input {
        background-color: #C5D4EB;
        border-color: #C5D4EB;
        font-family: Verdana;
        font-size: 20px;
        width: 500px;
        height: 50px;
        border: none;
        border-radius: 10px;
        padding-left: 20px;
    }

    button {
        background-color: #C5D4EB;
        border-color: #C5D4EB;
        font-family: Verdana;
        font-size: 20px;
        width: 350px;
        height: 50px;
        border-style: outset;
        border-radius: 10px;
        cursor: pointer;
    }

    note {
        color: #000000;
        font-size: 15px;
        font-family: Verdana;
    }

    h1 {
        color: #000000;
        font-size: 40px;
        font-family: Verdana;
        font-weight: bold;
        padding-top: 10px;
        padding-left: 200px;
        padding-bottom: 30px;
    }

    h2 {
        color: #000000;
        font-size: 40px;
        font-family: Verdana;
        padding-top: 10px;
        padding-left: 200px;
        padding-bottom: 20px;
    }

    a {
        color: #000000;
        font-size: 20px;
        font-family: Verdana;
        font-weight: bold;
        padding-top: 30px;
    }

    info {
        color: #FFFFFF;
        font-size: 15px;
        font-family: Verdana;
        padding-left: 50px;
    }
</style>

<!-- <template lang="">
    <div>
        <body>
            <br><br><br>
            <p Align=center><button> BOOK NOW </button></p><br>
            <p Align=center><button> CANCEL BOOKING </button></p><br>
            <p Align=center><button> BOOKING HISTORY </button></p><br>
            <br><br><br>
            <p Align=center><button @click="logout"> LOGOUT </button></p><br>
            <br><br>
            <h2>Location</h2>
            <center><img src="TUABmap.jpeg" width=850px height=500px></center>
            <br>
            <center>
                <a href="https://maps.app.goo.gl/AHKZVHwujk3bU3dj7?g_st=ic">Google map: TU Archery Range</a>
                <br>
                <label>Opening day: Monday - Thursday</label><br>
                <label>Opening hours: 17.00 - 18.00 pm.</label>
            </center>
            <br><br><br>
            <h2>Line Official</h2><br>
            <center><img src="lineoa.jpg" width=300px height=300px></center>
            <br><br><br><br>
            <div>
                <br><br>
                <info>TU Archery club information</info><br>
                <info>Facebook Page: TU Archery Club</info><br>
                <info>Instagram: @tuarcheryclub</info><br>
                <info>Monday - Thursday</info><br>
                <info>17.00 - 18.00 pm.</info><br><br><br>
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

    label {
        color: #000000;
        font-size: 20px;
        font-family: Verdana;
        padding-top: 30px;
    }

    div {
        height:max-content;
        width:100%;
        background-color: #275496;
        }

    input {
        background-color: #C5D4EB;
        border-color: #C5D4EB;
        font-family: Verdana;
        font-size: 20px;
        width: 500px;
        height: 50px;
        border: none;
        border-radius: 10px;
        padding-left: 20px;
    }

    button {
        background-color: #C5D4EB;
        border-color: #C5D4EB;
        font-family: Verdana;
        font-size: 20px;
        width: 350px;
        height: 50px;
        border-style: outset;
        border-radius: 10px;
        cursor: pointer;
    }

    note {
        color: #000000;
        font-size: 15px;
        font-family: Verdana;
    }

    h1 {
        color: #000000;
        font-size: 40px;
        font-family: Verdana;
        font-weight: bold;
        padding-top: 10px;
        padding-left: 200px;
        padding-bottom: 30px;
    }

    h2 {
        color: #000000;
        font-size: 40px;
        font-family: Verdana;
        padding-top: 10px;
        padding-left: 200px;
        padding-bottom: 20px;
    }

    a {
        color: #000000;
        font-size: 20px;
        font-family: Verdana;
        font-weight: bold;
        padding-top: 30px;
    }

    info {
        color: #FFFFFF;
        font-size: 15px;
        font-family: Verdana;
        padding-left: 50px;
    }
</style> -->