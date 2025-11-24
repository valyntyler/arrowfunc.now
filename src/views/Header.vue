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
  font-weight: bold;
  margin-top: 10vh;
}

.header :last-child {
  color: var(--text-primary-dim);
}

/**/

.header {
  text-align: left;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 2rem;
}

.header h1 {
  font-size: 2rem;
  /* font-weight: normal; */
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.header .subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}
</style>
