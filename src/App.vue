<script setup lang="ts">
import ScrollSection from "./components/ScrollSection.vue";
import ScrollColumn from "./components/ScrollColumn.vue";

import TextMode from "./views/textmode/TextMode.vue";
import Header from "./views/Header.vue";

import Contests from "./views/Contests.vue";

import Members from "./views/Members.vue";
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
      <Members></Members>
    </ScrollSection>
  </ScrollColumn>
</template>

<style scoped></style>
