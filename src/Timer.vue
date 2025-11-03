<template>
  <h2 id="timer" class="timer">27:09:36:07</h2>
</template>

<script setup>
import moment from "moment";

const dday = new Date("2025-11-30T10:00:00");

setInterval(() => {
  const left = new Date(dday - new Date());
  const cs = String(Math.floor(left.getMilliseconds() / 10)).padStart(2, "0");

  const timer = document.getElementById("timer");
  timer.innerText = `${moment(left).format("DD:hh:mm:ss")}:${cs}`;
}, 0);
</script>

<style scoped>
.timer {
  margin-top: 4em;
  font-size: 2.4em;
  text-align: center;
}
</style>
