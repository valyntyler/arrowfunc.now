<template>
  <h2 id="timer" class="timer">27:09:36:07</h2>
</template>

<script setup>
const dday = new Date("2025-11-30T10:00:00");

setInterval(() => {
  const left = new Date(dday - new Date());

  const dd = String(left.getDate()).padStart(2, "0");
  const hh = String(left.getHours()).padStart(2, "0");
  const mm = String(left.getMinutes()).padStart(2, "0");
  const ss = String(left.getSeconds()).padStart(2, "0");
  const cs = String(Math.floor(left.getMilliseconds() / 10)).padStart(2, "0");

  const result = `${dd}:${hh}:${mm}:${ss}:${cs}`;
  const timer = document.getElementById("timer");
  timer.innerText = result;
}, 0);
</script>

<style scoped>
.timer {
  margin: 0;
  padding: 0;
}
</style>
