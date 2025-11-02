<script setup lang="ts">
setInterval(() => {
  const dday = new Date("2025-11-30T10:00:00");
  const left = new Date(dday - new Date());

  const dd = String(left.getDate()).padStart(2, "0");
  const hh = String(left.getHours()).padStart(2, "0");
  const mm = String(left.getMinutes()).padStart(2, "0");
  const ss = String(left.getSeconds()).padStart(2, "0");
  const cs = String(Math.floor(left.getMilliseconds() / 10)).padStart(2, "0");

  const result = `${dd}:${hh}:${mm}:${ss}:${cs}`;
  document.querySelector(".timer").innerText = result;
}, 0);
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
      <h2 class="timer">27:09:36:07</h2>
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
