<template lang="">
    <div>
        <body>

            <br><br><br>
            <h1>Super Staff mode</h1><br>
            <p Align=center><button class="menu"> BOOKING </button></p><br>
            <p Align=center><button class="menu"> SHIFT SCHEDULE </button></p><br>
            <p Align=center><button class="menu"> OPERATION EDIT </button></p><br>
            <br><br><br>
            <p Align=right><button class="logout" @click="logout"> LOGOUT </button></p><br>
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

    .menu {
        background-color: #C5D4EB;
        border-color: #C5D4EB;
        font-family: Verdana;
        font-size: 20px;
        width: 700px;
        height: 60px;
        border-style: outset;
        border-radius: 10px;
        cursor: pointer;
    }

    .logout {
        background-color: #D9D9D9;
        border-color: #D9D9D9;
        font-family: Verdana;
        font-size: 20px;
        width: 200px;
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
        font-size: 35px;
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

    name {
        color: #000000;
        font-size: 35px;
        font-family: Verdana;
        font-weight: bold;
        padding-top: 10px;
        padding-left: 200px;
    }

    bar {
        height:max-content;
        width:100%;
        background-color: #FFD13F;
        }
</style>