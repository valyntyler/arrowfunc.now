<script setup lang="ts">
import TextHorse from "./views/TextHorse.vue";
import Timer from "./views/Timer.vue";
import Header from "./views/Header.vue";
</script>

<template>
  <div class="container">
    <TextHorse></TextHorse>
    <Header></Header>
    <Timer></Timer>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 5vh;
  padding: 2rem 1rem;
}
</style>
