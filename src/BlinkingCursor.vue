<script setup lang="ts">
import { ref } from "vue";

const cursor = ref("_");

setInterval(() => {
  if (cursor.value == "_") {
    cursor.value = " ";
  } else {
    cursor.value = "_";
  }
}, 380);
</script>

<template>
  <h1 class="blinking-cursor">{{ cursor }}</h1>
</template>

<style scoped>
.blinking-cursor {
  color: magenta;
  background: yellow;
  white-space: pre;
  font-weight: bold;
}
</style>
