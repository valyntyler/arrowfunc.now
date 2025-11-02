<script setup lang="ts">
import Timer from "./Timer.vue";
</script>

<template>
  <div class="container">
    <header class="header">
      <h1>arrowFunc.now</h1>
      <p class="subtitle">(() => {})();</p>
    </header>

    <section class="section">
      <h2 class="juan">JUAN</h2>
    </section>

    <section class="section">
      <Timer />
    </section>

    <section class="section">
      <h2>Roadmap</h2>
      <div>
        <h3 class="example-header">NWERC</h3>
        <p class="example-description">
          ICPC Northwestern Europe Regional Contest
        </p>
      </div>
      <div>
        <h3>BAPC</h3>
        <p class="example-description">Benelux Algorithm Programming Contest</p>
      </div>
      <div>
        <h3 class="example-header">TAPC</h3>
        <p class="example-description">Twentse Algorithm Programming Contest</p>
      </div>
    </section>

    <section class="section">
      <h2>Members</h2>
      <div>
        <h3 class="example-header">Anton Anapreyenka</h3>
        <p class="example-description">dictators hate him</p>
      </div>
      <div>
        <h3 class="example-header">Niladri Adhikary</h3>
        <p class="example-description">baljeet energy</p>
      </div>
      <div>
        <h3 class="example-header">Valyn Tyler</h3>
        <p class="example-description">coffee gremlin</p>
      </div>
    </section>

    <footer class="footer">
      <p>
        <a href="https://github.com/valyntyler" target="_blank">@valyntyler</a>
        |
        <a href="https://github.com/valyntyler/arrowfunc.now" target="_blank"
          >github</a
        >
      </p>
    </footer>
  </div>
</template>

<style scoped></style>
