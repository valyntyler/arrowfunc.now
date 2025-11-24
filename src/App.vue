<script setup lang="ts">
import TextHorse from "./views/TextHorse.vue";
import Title from "./views/Title.vue";
</script>

<template>
  <div class="container">
    <TextHorse></TextHorse>
    <Title></Title>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
