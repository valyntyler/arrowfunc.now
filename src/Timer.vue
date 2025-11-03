<script setup>
import moment from "moment";
import { ref } from "vue"

const dday = new Date("2025-11-30T10:00:00");
const time = ref();

setInterval(() => {
  const left = new Date(dday - new Date());
  const cs = String(Math.floor(left.getMilliseconds() / 10)).padStart(2, "0");

  time.value = `${moment(left).format("DD:hh:mm:ss")}:${cs}`;
}, 0);
</script>

<template>
  <section class="timer-container">
    <h2 id="timer" class="timer">{{ time }}</h2>
  </section>
</template>

<style scoped>
.timer-container {
  display: flex;
  justify-content: center;
  margin-top: 4em;
  font-size: 2.4em;
}

.timer {
  margin-bottom: 1rem;
  padding: 1.2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  border: 1px solid var(--border-color);
  transition: border-color 0.2s ease;
  background: var(--bg-color);
}
</style>
