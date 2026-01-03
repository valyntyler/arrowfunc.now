<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <p>
      <a target="_blank" href="https://github.com/valyntyler">@valyntyler</a> |
      <a href="https://github.com/arrowfuncnow/arrowfunc.now/" target="_blank"
        >github</a
      >
      |
      <a href="https://tapc.ia.utwente.nl/" target="_blank">info</a>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  text-align: left;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.8rem;
}

.footer p {
  margin-bottom: 0.5rem;
}

.footer a {
  color: var(--text-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.footer a:hover {
  border-bottom-color: var(--text-primary);
}
</style>
