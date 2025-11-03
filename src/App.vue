<script setup lang="ts">
import EventItem from "./EventItem.vue";
import Timer from "./Timer.vue";
</script>

<template>
  <div class="container">
    <EventItem
      e_title="NWERC"
      e_title_long="ICPC Northwestern Europe Regional Contest"
    />
    <EventItem
      e_title="BAPC"
      e_title_long="Benelux Algorithm Programming Contest"
      :e_date="new Date('2025-10-25')"
    />
    <EventItem
      e_title="TAPC"
      e_title_long="Twentse Algorithm Programming Contest"
      :e_date="new Date('2025-09-20')"
    />
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  justify-content: center;
}
</style>
