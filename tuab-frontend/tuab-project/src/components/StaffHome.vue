<template lang="">
    <div>
        <body>

            <br><br><br>
            <p Align=center><button> BOOKING </button></p><br>
            <p Align=center><button> SHIFT SCHEDULE </button></p><br>
            <br><br><br>
            <p Align=right><button @click="logout"> LOGOUT </button></p><br>
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
    font-family: sans-serif;
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
    font-family: sans-serif;
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
    font-family: sans-serif;
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
    font-family: sans-serif;
}
</style>