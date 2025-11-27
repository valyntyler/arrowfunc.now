<script setup lang="ts"></script>

<template>
  <main>
    <section><div>1</div></section>
    <section><div>2</div></section>
    <section><div>3</div></section>
    <section><div>4</div></section>
    <section><div>5</div></section>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

main > section {
  height: 100vh;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: var(--text-primary);
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

main > section:nth-child(odd) {
  border-color: var(--text-primary-dim);
}

main > section > div {
  font-size: 60px;
}
</style>
