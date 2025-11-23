<script setup lang="ts">
import { ref } from "vue";

const lmb = "(() => {})();";
const url = "arrowfunc.now";

const text = ref("");
let i = 0;

const typingAnimation = setInterval(() => {
  text.value += url[i];
  i++;
  if (i == url.length) {
    clearInterval(typingAnimation);
  }
}, 50);
</script>

<template>
  <h1 class="splash-text">{{ text }}</h1>
</template>

<style scoped>
.splash-text {
  background: red;
  white-space: pre;
}
</style>
