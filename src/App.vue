<script setup lang="ts">
import EventItem from "./EventItem.vue";
import EventList from "./EventList.vue";
import Timer from "./Timer.vue";
</script>

<template>
  <div class="container">
    <EventList></EventList>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  justify-content: center;
}
</style>
