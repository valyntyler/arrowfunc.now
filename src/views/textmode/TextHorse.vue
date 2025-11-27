<script setup lang="ts">
import { textmode } from "textmode.js";
import { onMounted, useTemplateRef } from "vue";

import * as CodeRain from "@/views/textmode/code-rain";
import * as CodeHorse from "@/views/textmode/text-horse";

const aspectRatio = 960 / 639;
const canvasRef = useTemplateRef("canvasRef");

onMounted(() => {
  canvasRef.value!.focus();
  canvasRef.value!.classList.add("render-target");

  console.log("hi");
  document.addEventListener("keypress", (event) => {
    if (event.key === "f") {
      event.preventDefault();
      if (document.fullscreenElement) document.exitFullscreen();
      else canvasRef.value!.requestFullscreen();
    }
  });

  const t = textmode.create({
    fontSize: 16,
    frameRate: 60,
    canvas: canvasRef.value!,
  });

  const onWindowResized = async () => {
    const height = Math.min(window.innerWidth, window.innerHeight);
    const width = height * aspectRatio;

    // FIX: font not scaling when screen resizes
    t.resizeCanvas(width * 0.6, height * 0.6);

    // CodeRain.windowResized(t);
    // CodeHorse.windowResized(t);
  };

  t.setup(() => {
    onWindowResized();
    CodeRain.setup(t);
    CodeHorse.setup(t);
  });

  t.draw(() => {
    t.background(0);
    CodeRain.draw(t);
    CodeHorse.draw(t);
  });

  t.windowResized = onWindowResized;
});
</script>

<template>
  <div class="canvas-container">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.canvas-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.render-target {
  /* border: 1px solid white; */
}
</style>
