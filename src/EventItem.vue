<script setup lang="ts">
import moment from "moment";

const props = defineProps({
  e_title: String,
  e_title_long: String,
  e_date: Date,
});
</script>

<template>
  <li class="event-item">
    <h3>{{ e_title }}</h3>
    <p>{{ e_title_long }}</p>
    <p>{{ moment(e_date).format("MMMM Do YYYY") }}</p>
  </li>
</template>

<style scoped>
.event-item p {
  color: var(--text-secondary);
}
</style>
