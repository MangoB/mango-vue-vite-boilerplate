<!-- eslint-disable no-console -->
<script setup lang="ts">
import router from '@/router'

function goHomePage() {
  router.replace('/')
}
</script>

<template>
  <v-row
    class="h-screen ma-0 bg-primary"
  >
    <v-col
      class="text-center align-self-center mt-4"
      cols="12"
    >
      <div>
        <div
          class="text-h3 font-weight-black"
        >
          404 NotFound
        </div>
        <div class="text-medium-emphasis my-2">
          The link is broken or the page has been moved
        </div>
        <v-btn
          data-test="btn-go-home-page"
          class="mt-6 font-weight-bold"
          outlined
          rounded
          large
          @click="goHomePage"
        >
          Back to home page
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>
