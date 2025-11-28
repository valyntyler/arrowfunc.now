<script setup lang="ts"></script>

<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<style scoped>
ul {
  width: 100%;
  max-width: 600px;
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
