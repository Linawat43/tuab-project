<template>
    <button class="blueround"><span>  </span></button>
</template>

<style>
.blueround {
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

.blueround span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.6s;
}

.blueround span:after {
  content:'>';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -5%;
  transition: 0.6s;
}

.blueround:hover span {
  padding-right: 9%;
}

.blueround:hover span:after {
  opacity: 1;
  right: 0;
}
</style>