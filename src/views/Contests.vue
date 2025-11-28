<script setup lang="ts">
import Timer from "./Timer.vue";

import ContentItem from "@/components/ContentItem.vue";
import ContentList from "@/components/ContentList.vue";
</script>

<template>
  <h2>Events</h2>
  <ContentList>
    <ContentItem>
      <span>
        <h3>NWERC</h3>
        <h3><Timer></Timer></h3>
      </span>
      <h3>Northwestern Europe Regional Contest</h3>
    </ContentItem>
    <ContentItem>
      <span>
        <h3>BAPC</h3>
        <h3>25 Oct, 2025</h3>
      </span>
      <h3>Benelux Algorithm Programming Contest</h3>
    </ContentItem>
    <ContentItem>
      <span>
        <h3>TAPC</h3>
        <h3>20 Sep, 2025</h3>
      </span>
      <h3>Twentse Algorithm Programming Contest</h3>
    </ContentItem>
  </ContentList>
</template>

<style scoped>
h2 {
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: normal;
  margin-bottom: 1em;
}

span {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

span h3:last-of-type {
  color: var(--text-secondary);
}

h3:last-of-type {
  color: var(--text-primary-dim);
}
</style>
