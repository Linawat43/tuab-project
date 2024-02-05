<template lang="">
    <div>
        <body>
            <br><br><br>

            <h1>Password setting</h1>
            <form action="/generalHome.html">
                <p Align="center"><label for="password">New password</label></p>
                <p Align="center"><input type="password" name="pwd"></p><br>
                <p Align="center"><label for="password">Re-enter new password</label></p>
                <p Align="center"><input type="password" name="pwd"></p>

                <br><br>
                <p Align="center"><button type="submit">Save</button></p>
            </form>

        </body>
    </div>
</template>
<script>
export default {
    
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