<script setup lang="ts">
import { onMounted } from "vue";

let index = 0;

onMounted(() => {
  const main = document.getElementById("main")!;
  document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    let scrolling = false;
    switch (key) {
      case "J":
      case "S":
      case "ArrowDown".toUpperCase():
        index = Math.min(index + 1, main.children.length - 1);
        scrolling = true;
        break;
      case "K":
      case "W":
      case "ArrowUp".toUpperCase():
        index = Math.max(0, index - 1);
        scrolling = true;
        break;
    }
    if (scrolling) {
      main.children[index]?.scrollIntoView({ behavior: "smooth" });
    }
  });
});
</script>

<template>
  <main id="main">
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
