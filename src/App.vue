<script setup lang="ts">
import EventList from "./EventList.vue";
import Timer from "./Timer.vue";
</script>

<template>
  <div class="container">
    <EventList></EventList>
    <Timer></Timer>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
