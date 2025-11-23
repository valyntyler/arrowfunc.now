<script setup lang="ts">
import { loadImage, imageRGB } from "@/utils/image";
import { textmode } from "textmode.js";
import { onMounted, useTemplateRef } from "vue";

const aspectRatio = 960 / 639;
const canvasRef = useTemplateRef("canvasRef");

onMounted(() => {
  canvasRef.value!.focus();
  canvasRef.value!.classList.add("render-target");

  const t = textmode.create({
    fontSize: 16,
    frameRate: 60,
    canvas: canvasRef.value!,
  });

  const onWindowResized = () => {
    const height = Math.min(window.innerWidth, window.innerHeight);
    const width = height * aspectRatio;

    t.resizeCanvas(width * 0.6, height * 0.6);
  };

  t.setup(() => {
    onWindowResized();
  });

  t.draw(() => {
    t.background(0);

    t.char("A");
    t.charColor(255, 255, 255);
    t.rotateZ(t.frameCount * 2);
    t.rect(16, 16);
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
  border: 1px solid white;
}
</style>
