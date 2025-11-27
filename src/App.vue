<script setup lang="ts">
import ScrollSection from "./components/ScrollSection.vue";
</script>

<template>
  <main>
    <ScrollSection>1</ScrollSection>
    <ScrollSection>2</ScrollSection>
    <ScrollSection>3</ScrollSection>
    <ScrollSection>4</ScrollSection>
    <ScrollSection>5</ScrollSection>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
</style>
