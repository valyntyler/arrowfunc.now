<script setup lang="ts"></script>

<template>
  <h2>Contests</h2>
  <ul>
    <li>
      <h3>NWERC</h3>
      <h3>Northwestern Europe Regional Contest</h3>
    </li>
    <li>
      <h3>BAPC</h3>
      <h3>Benelux Algorithm Programming Contest</h3>
    </li>
    <li>
      <h3>TAPC</h3>
      <h3>Twentse Algorithm Programming Contest</h3>
    </li>
  </ul>
</template>

<style scoped>
h2 {
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: normal;
}

h3 {
  color: var(--text-primary-dim);
}

h3:last-of-type {
  text-transform: uppercase;
  color: var(--text-secondary);
}

ul {
  margin-top: 1.4em;
  margin-bottom: 1.4em;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

li {
  display: flex;
  justify-content: space-between;
}
</style>
