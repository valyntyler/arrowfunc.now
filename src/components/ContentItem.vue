<script setup lang="ts"></script>

<template>
  <li><slot></slot></li>
</template>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1.2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  border: 1px solid var(--border-color);
  transition: border-color 0.2s ease;
  background: var(--bg-color);
}

span {
  background: red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h3 {
  color: var(--text-primary-dim);
}
</style>
