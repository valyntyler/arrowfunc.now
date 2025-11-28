<script setup lang="ts">
import ScrollSection from "./components/ScrollSection.vue";
import ScrollColumn from "./components/ScrollColumn.vue";

import TextMode from "./views/textmode/TextMode.vue";
import Header from "./views/Header.vue";

import Contests from "./views/Contests.vue";

import Members from "./views/Members.vue";
import Footer from "./views/Footer.vue";
</script>

<template>
  <ScrollColumn>
    <ScrollSection>
      <TextMode></TextMode>
      <Header></Header>
    </ScrollSection>
    <ScrollSection>
      <Contests></Contests>
    </ScrollSection>
    <ScrollSection>
      <div></div>
      <Members></Members>
      <Footer></Footer>
    </ScrollSection>
  </ScrollColumn>
</template>

<style scoped>
section:last-of-type {
  justify-content: space-between;
  padding-top: 3.5em;
  padding-bottom: 1em;
}
</style>
