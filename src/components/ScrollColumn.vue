<script setup lang="ts"></script>

<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
</style>
