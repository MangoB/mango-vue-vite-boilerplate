<script setup lang="ts">
import router from '@/router'

const layout = computed(() => {
  const layoutName = router.currentRoute?.value?.meta?.layout
  return layoutName ? defineAsyncComponent(() => import(`@/layouts/${layoutName}.vue`)) : 'div'
})
</script>

<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>
