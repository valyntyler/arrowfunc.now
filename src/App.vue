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
    <ScrollSection>2</ScrollSection>
    <ScrollSection>3</ScrollSection>
    <ScrollSection>4</ScrollSection>
    <ScrollSection>5</ScrollSection>
  </ScrollColumn>
</template>

<style scoped></style>
