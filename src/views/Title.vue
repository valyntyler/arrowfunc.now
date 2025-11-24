<script setup lang="ts"></script>

<template>
  <header class="header">
    <h1>arrowfunc.now</h1>
    <h1>(() => {})();</h1>
  </header>
</template>

<style scoped>
.header {
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  margin-top: 10vh;
}

.header :last-child {
  color: var(--text-primary-dim);
}
</style>
