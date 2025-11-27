<script setup lang="ts"></script>

<template>
  <section>
    <div><slot></slot></div>
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: var(--text-primary);
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

section > div {
  font-size: 60px;
}
</style>
