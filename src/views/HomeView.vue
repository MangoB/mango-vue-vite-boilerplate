<script setup lang="ts">
const mainStore = useMainStore()
</script>

<template>
  <div class="text-center pa-8">
    <div class="mb-6">
      <p class="text-h4 font-weight-bold">
        Welcome to {{ mainStore.templateName }}
      </p>
      <p class="text-medium-emphasis">
        Vite Starter Template
      </p>
    </div>

    <p>
      See
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        README.md
      </a>
      for more information.
    </p>
  </div>
</template>

<style scoped>
  a {
    color: #42b983;
  }
</style>
