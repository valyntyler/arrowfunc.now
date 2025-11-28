<script setup lang="ts"></script>

<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  /* border: 1px solid var(--text-primary); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
