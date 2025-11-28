<script setup lang="ts">
import moment from "moment";
import { ref } from "vue";

const dday = new Date("2025-11-30T10:00:00");
const time = ref();

setInterval(() => {
  const left = new Date(dday.getTime() - new Date().getTime());
  const cs = String(Math.floor(left.getMilliseconds() / 10)).padStart(2, "0");

  time.value = `${moment(left).format("DD:hh:mm:ss")}:${cs}`;
}, 0);
</script>

<template>
  {{ time }}
</template>

<style scoped></style>
