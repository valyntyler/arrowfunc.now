<script setup lang="ts"></script>

<template>
  <div>
    <h2>Team</h2>
    <ul>
      <li><h3>Anton Anapreyenka</h3></li>
      <li><h3>Niladri Adhikary</h3></li>
      <li><h3>Valyn Tyler</h3></li>
      <li>
        <h3>Adrain Fluturel</h3>
        <h3 class="coach">Coach</h3>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: normal;
}

h3 {
  color: var(--text-primary-dim);
}

h3.coach {
  text-transform: uppercase;
  color: var(--text-secondary);
}

ul {
  margin-top: 1.4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

li {
  gap: 10px;
  display: flex;
}
</style>
