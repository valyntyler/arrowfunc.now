<template>
  <ul class="event-list">
    <EventItem
      v-for="event in events"
      :e_title="event.title"
      :e_title_long="event.title_long"
      :e_date="event.date"
    ></EventItem>
  </ul>
</template>

<script setup>
import EventItem from "./EventItem.vue";
import { ref } from "vue";

const events = ref([
  {
    date: new Date("2025-11-30T10:00:00"),
    title: "NWERC",
    title_long: "ICPC Northwestern Europe Regional Contest",
  },
  {
    date: new Date("2025-10-25"),
    title: "BAPC",
    title_long: "Benelux Algorithm Programming Contest",
  },
  {
    date: new Date("2025-09-20"),
    title: "TAPC",
    title_long: "Twentse Algorithm Programming Contest",
  },
]);
</script>

<style scoped></style>
