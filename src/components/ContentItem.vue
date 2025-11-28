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
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  max-width: 555px;
  width: 100%;
  border: 1px solid var(--border-color);
  transition: border-color 0.2s ease;
  background: var(--bg-color);
}
</style>
