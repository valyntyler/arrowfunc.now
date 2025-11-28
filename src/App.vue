<script setup lang="ts">
import ScrollSection from "./components/ScrollSection.vue";
import ScrollColumn from "./components/ScrollColumn.vue";

import TextMode from "./views/textmode/TextMode.vue";
import Header from "./views/Header.vue";
</script>

<template>
  <ScrollColumn>
    <ScrollSection>
      <TextMode></TextMode>
      <Header></Header>
    </ScrollSection>
    <ScrollSection>
      <h2>Contests</h2>
    </ScrollSection>
    <ScrollSection>
      <h2>Team</h2>
    </ScrollSection>
  </ScrollColumn>
</template>

<style scoped>
section:nth-child(1) {
  gap: 15vh;
}
</style>
