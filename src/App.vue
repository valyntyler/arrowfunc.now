<script setup lang="ts">
import TextHorse from "./views/textmode/TextHorse.vue";
import Timer from "./views/Timer.vue";
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
import Members from "./views/Members.vue";
import Contests from "./views/Contests.vue";
</script>

<template>
  <div class="container">
    <TextHorse></TextHorse>
    <Header></Header>
    <Timer></Timer>
    <Contests></Contests>
    <Members></Members>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 5vh;
  padding: 2rem 1rem;
}
</style>
