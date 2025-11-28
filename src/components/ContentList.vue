<script setup lang="ts"></script>

<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<style scoped>
span {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

span h3:last-of-type {
  color: var(--text-secondary);
}

h3:last-of-type {
  color: var(--text-primary-dim);
}

ul {
  width: 100%;
  max-width: 800px;
  margin-top: 1.4em;
  margin-bottom: 1.4em;
  padding-left: 2.5em;
  padding-right: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
