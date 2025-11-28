<script setup lang="ts"></script>

<template>
  <section>
    <div><slot></slot></div>
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  /* border: 1px solid; */
  /* border-color: var(--text-primary); */
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
